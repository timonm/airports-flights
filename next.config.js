const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    env: {
        AIRPORTS_KEY: process.env.AIRPORTS_KEY,
        AIRPORTS_SECRET: process.env.AIRPORTS_SECRET,
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
};
