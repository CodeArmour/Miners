# Miners application

## Requirements

- Node.js 20.9 or newer
- npm and the committed `package-lock.json`

## Commands

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run lint
npm.cmd run type-check
npm.cmd test
npm.cmd run build
npm.cmd run start
```

The application uses Next.js App Router, TypeScript, Tailwind CSS, and source code under `src/`. After building, `npm.cmd run start` serves the production application on port 3000 by default. Use `-- --port <port>` to select another port.
