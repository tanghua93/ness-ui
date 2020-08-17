const fs = require('fs');
const { exec } = require('child_process');

/**
 * @param {*} dir 
 * @param {*} callback 
 */
function readFile(dir, callback) {
  callback(dir);
  fs.readdir(dir, (err, files) => {
    if (files && files.length) {
      files.forEach(file => {
        var arr = file.split('.');
        arr.pop();
        var path = dir + '/' + file;
        if (fs.statSync(path).isDirectory() && file) {
          callback(dir, file)
          readFile(path, callback);
        }
      })
    }
  })
}

readFile('./src/components', function (dir, file) {
  if (file) {
    exec(`node-sass ./src/styles/index.scss ./build/lib/components/styles/index.css --output-style compressed`)
    exec(`node-sass -r ${dir}/${file}/_${file.toLowerCase()}.scss ./build/lib/components/styles/${file}.css --output-style compressed`, function () {

    })

  }
})