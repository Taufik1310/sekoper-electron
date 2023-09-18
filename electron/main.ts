import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { createProductTypes, getProductType } from './controller/ProductTypeController';
import { createProducts, getProduct, getProductByType } from './controller/ProductController';
import { createUsers, getUser, insertUser } from './controller/UserController';
let win : BrowserWindow 

const seederData = async () => {
  try {
    await createUsers()
    await createProductTypes()
    await createProducts()
  } catch (error) {
    console.error(error)
  }
}

seederData()

ipcMain.handle('getProductType', (event, data) => {
  return getProductType(data)
})
ipcMain.handle('getProductByType', (event, data) => {
  return getProductByType(data)
})
ipcMain.handle('getProduct', (event, data) => {
  return getProduct(data)
})
ipcMain.handle('getUser', (event, data) => {
  return getUser(data.email, data.password)
})
ipcMain.handle('insertUser', (event, data) => {
  return insertUser(data.email, data.username, data.password)
})



function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  

  if (app.isPackaged) {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL('http://localhost:3000/index.html');
    
    win.webContents.openDevTools();

    // Hot Reloading on 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname,
        '..',
        '..',
        'node_modules',
        '.bin',
        'electron' + (process.platform === "win32" ? ".cmd" : "")),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }
}

app.whenReady().then(async () => {
  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  createWindow();
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});
