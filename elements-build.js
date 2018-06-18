const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/product-header/scripts.js',
        './dist/product-header/main.js',
        './dist/product-header/runtime.js',
        './dist/product-header/polyfills.js',
    ]
    await fs.ensureDir('./dist-npm')
    await fs.ensureDir('./dist-npm/product-header')
    await concat(files, './dist-npm/product-header/product-header.js');
    await fs.copyFile('./dist/product-header/styles.css', './dist-npm/product-header/styles.css')
    await fs.copy('./dist/product-header/assets/', './dist-npm/product-header/assets/' )
    
})();