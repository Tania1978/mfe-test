const { merge } = require("webpack-merge");
const HtmllWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
  mode: "production", //webpack will minify files and make toher adjustments
  output: {
    filename: "[name].[contenthas].js", //naming for caching issues
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJSON.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, prodConfig);
