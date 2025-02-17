const { getDefaultConfig } = require('expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('db');
defaultConfig.transformer = {
    ...defaultConfig.transformer,
    _expoRelativeProjectRoot: __dirname
  }
module.exports = defaultConfig;