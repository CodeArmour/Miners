import { spawn, spawnSync } from "node:child_process";
import { join } from "node:path";

const port = "3100";
const baseUrl = `http://127.0.0.1:${port}`;
const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
const playwrightCli = join(
  process.cwd(),
  "node_modules",
  "@playwright",
  "test",
  "cli.js",
);

const server = spawn(
  process.execPath,
  [nextBin, "start", "--hostname", "127.0.0.1", "--port", port],
  { cwd: process.cwd(), stdio: "ignore", windowsHide: true },
);
server.unref();

function stopServer() {
  if (server.pid === undefined) return;

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/PID", String(server.pid), "/T", "/F"], {
      stdio: "ignore",
    });
  } else {
    server.kill("SIGTERM");
  }

  server.removeAllListeners();
  server.unref();
}

async function waitForServer() {
  const deadline = Date.now() + 60_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/`);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Production server did not become ready at ${baseUrl}/`);
}

try {
  await waitForServer();
  const result = spawnSync(process.execPath, [playwrightCli, "test"], {
    cwd: process.cwd(),
    env: { ...process.env, PLAYWRIGHT_BASE_URL: baseUrl },
    stdio: "inherit",
    windowsHide: true,
  });

  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  stopServer();
}
