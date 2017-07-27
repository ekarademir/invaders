const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
    win  =  new BrowserWindow({
        width: 400, 
        height: 600,
        useContentSize : true,
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file:', 
        slashes: true
    }))

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

    win.setMenu(null)

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

ipcMain.on('convey', (event, _msg) => {
    console.log(_msg)
})