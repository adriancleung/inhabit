const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
// require("electron-reload")(__dirname);
let win;

function createWindow() {
    //    win = new BrowserWindow({width: 400, height: 800, })
    win = new BrowserWindow({
        width: 350,
        height: 700,
        frame: false,
        transparent: true,
        fullscreen: false,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
        },
    });
    win.setMenu(null);
    win.webContents.openDevTools();
    //    win.setMenuBarVisibility(false)
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true,
        })
    );
    // calendarWin = new BrowserWindow({
    //     width: 400,
    //     height: 50,
    // })
}

app.on("ready", createWindow);
