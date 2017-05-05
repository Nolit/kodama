/// <reference path="../../typings/index.d.ts" />

import * as electron from 'electron'
// import config = require('config')
// import path = require('path')

const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow;
const app: Electron.App = electron.app;
// const indexPath = path.join(config.path.dist, 'index.html');

class MyApplication {
    mainWindow: Electron.BrowserWindow | null = null;

    constructor(public app: Electron.App){
        this.app.on('window-all-closed', this.onWindowAllClosed);
        this.app.on('ready', this.onReady);
    }

    onWindowAllClosed(){
        if(process.platform != 'darwin'){
            this.app.quit();
        }
    }

    onReady(){
        // this.mainWindow.webContents.openDevTools();
        this.mainWindow = new BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 300,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: 'hidden'
        });

        this.mainWindow.loadURL('C:\\Projects\\kodama\\dist\\index.html');

        this.mainWindow.on('closed', () => {
            this.mainWindow = null;
        });
    }
}
const myapp = new MyApplication(app);