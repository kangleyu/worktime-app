module.exports = function() {
  const app = './app/';
  const htmls = '/**/*.html';
  const typescripts = '/**/*.ts';
  const styles = '**/*.css';
  const jsons = '**/*.json';
  const build = './build/';
  const dist = './dist/';
  const root = './';
  const systmjsFile = 'systemjs.config.js';

  const config = {
    // config goes here
    nodeServer: 'index.js',
    tsRoot: app,
    htmls: app + htmls,
    tsFiles: app + typescripts,
    styles: app + styles,
    jsons: app + jsons,
    build: build,
    dist: dist,
    systemjs: root + systmjsFile
  };

  return config;
};

// help functions go here