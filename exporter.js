var normalizedPath = require("path").join(__dirname, "src");

require("fs").readdirSync(normalizedPath).forEach(function(file, ind) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./src/' + file);
  }
});
