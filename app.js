//http://davidwalsh.name/node-watch-file

var chokidar = require('chokidar');

var log = console.log.bind(console);

chokidar.watch('.', {ignored: /[\/\\]\./})
  .on('add', function(path, stats) { log('added ' + path + ' new size ' + stats.size); }) // first start it logs all of the files in the dir
  .on('addDir', function(path, stats) { log('added Dir ' + path + ' new size ' + stats.size); })
  .on('change', function(path, stats) { log('changed ' + path + ' new size ' + stats.size); })
  .on('unlink', function(path, stats) { log('deleted ' + path); })
  .on('unlinkDir', function(path, stats) { log('deleted Dir ' + path); })
  .on('error', function(error) { log('Error happened', error); });