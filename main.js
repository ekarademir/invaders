const {app, BrowserWindow, ipcMain, screen} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
    win  =  new BrowserWindow({width: 400, height: 600})

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file:', 
        slashes: true
    }))

    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

    ipcMain.on('')

}

app.on( 'ready', createWindow )

app.on( 'window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})