const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app'); // points '@' to /app
    config.resolve.extensions.push('.ts', '.tsx'); // ensures TS modules resolve
    return config;
  },
};

module.exports = nextConfig;