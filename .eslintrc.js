

export const parser = "@babel/eslint-parser";
export const parserOptions = {
  sourceType: "module",
  allowImportExportEverywhere: false,
  ecmaFeatures: {
    globalReturn: false,
  },
  babelOptions: {
    configFile: "path/to/config.js",
  },
};
  