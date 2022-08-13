/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    config.module.rules.push({
      test: /\.(eot|svg|gif|md|.scss)$/,
      use: ["style-loader", "css-loader", "less-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;
