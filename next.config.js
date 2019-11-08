exports.default = {
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

        return config;
    },
};
