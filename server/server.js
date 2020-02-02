const router = require('./router');
const ipc = require('./server-ipc');
require('./store');

let isDev, version;

if (process.argv[2] === '--subprocess') {
  isDev = false;
  version = process.argv[3];

  let socketName = process.argv[4];
  ipc.init(socketName, router);
} else {
  let { ipcRenderer, remote } = require('electron');
  isDev = true;
  version = remote.app.getVersion();

  ipcRenderer.on('set-socket', (event, { name }) => {
    ipc.init(name, router);
  });
};

console.log(version, isDev);
