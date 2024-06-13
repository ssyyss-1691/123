import path from 'path';
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    resolve: {
      alias: [
        {
          find: /^src(.+)/,
          replacement: path.join(process.cwd(), 'src/$1'),
        },
      ]
    },
    plugins: [react(), viteTsconfigPaths()],
  };
});
