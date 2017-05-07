'use strict';

(function(){
  // configure the path aliases in SystemJS
  // then executing the import '@angular/core' statement
  // will instruct SystemJS to actually import the core 
  // package from node_modules/@angular/core
  var pathMappings = {
    'app': 'build/src',
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
    '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
    'rxjs': 'node_modules/rxjs'
  };

  var packages = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    'rxjs',
    'build'
  ];

  var packagesConfig = {
    app: {
      main: './app',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  };

  // configure SystemJS with the path mappings,
  // entery pont, and default file extension expected
  // for each package represented 
  System.config({
    map: pathMappings,
    packages: packagesConfig
  });
})();