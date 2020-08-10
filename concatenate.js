const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/ang9-examples/runtime-es2015.js',
        './dist/ang9-examples/polyfills-es2015.js',
        './dist/ang9-examples/main-es2015.js'
      ];

      await fs.ensureDir('preview');
      await concat(files, 'preview/angularapp.js');
}
concatenate();