const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeCredito",
  exposes: {
    "./CreditoModule": "./src/app/credito/credito.module.ts",
  },
});
