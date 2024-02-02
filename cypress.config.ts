import { defineConfig } from "cypress";
import cypressSplit from "cypress-split";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
    setupNodeEvents(on, config) {
      cypressSplit(on, config);

      return config;
    },
  },
});
