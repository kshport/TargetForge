const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const { fork } = require('child_process');
const findOpenSocket = require('./find-open-socket');
require('electron-reload');

let clientWindow;
let serverWindow;
let serverProcess;

function createWindow(socketName) {
  clientWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/client/client-preload.js'
    }
  });

  clientWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  clientWindow.webContents.on('did-finish-load', () => {
    clientWindow.webContents.send('set-socket', {
      name: socketName
    })
  });

  clientWindow.on('closed', () => {
    clientWindow = null
  });
}

function createBackgroundWindow(socketName) {
  serverWindow = new BrowserWindow({
    x: 500,
    y: 300,
    width: 700,
    height: 500,
    show: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  serverWindow.loadURL(`file://${__dirname}/server/server-dev.html`);

  serverWindow.webContents.openDevTools();

  serverWindow.webContents.on('did-finish-load', () => {
    serverWindow.webContents.send('set-socket', { name: socketName })
  });
}

function createBackgroundProcess(socketName) {
  serverProcess = fork(__dirname + '/server/server.js', [
    '--subprocess',
    app.getVersion(),
    socketName
  ]);

  serverProcess.on('message', msg => {
    console.log(msg)
  });
}

app.on('ready', async () => {
  const serverSocket = await findOpenSocket();

  createWindow(serverSocket);

  if (isDev) {
    createBackgroundWindow(serverSocket);
  } else {
    createBackgroundProcess(serverSocket);
  }
});

app.on('before-quit', () => {
  if (serverProcess) {
    serverProcess.kill();
    serverProcess = null;
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (clientWindow === null) {
    createWindow();
  }
});
