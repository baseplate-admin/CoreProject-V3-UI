import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

export default defineConfig({
    plugins: [
        sveltekit(),
        purgeCss({
            safelist: {
                // any selectors that begin with "hljs-" will not be purged
                greedy: [/^hljs-/, /^sl-/]
            }
        }),

    ],
    esbuild: {
        legalComments: "none",
        // This is magix
        // minifyIdentifiers: false,
        // Disable console
        drop: ["console", "debugger"]
    },
    build: {
        target: "esnext",
        sourcemap: true
    },
    css: {
        devSourcemap: true
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"]
    }
});
