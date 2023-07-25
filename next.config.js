/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.ignoreWarnings = [
            { module: /node_modules/ },
        ];
        config.module.rules.push({
            exclude: /node_modules/,
        });
        return config;
    },
};

module.exports = nextConfig;
