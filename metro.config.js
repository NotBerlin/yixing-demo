const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 优化配置
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];
config.transformer.minifierConfig = {
  compress: {
    drop_console: true,
  },
};

module.exports = config;
