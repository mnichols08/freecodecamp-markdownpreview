const electron = require('electron'),
    isDev = require('electron-is-dev'),
    path = require('path');
    app = electron.app,
    BrowserWindow = electron.BrowserWindow;
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL( isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
        try {
        app.setAboutPanelOptions({ applicationName: 'Markdown Previewer', copyright: 'Mikey'});
        } catch (err) { console.log(err)}; // inevitable error at this point for some reason it is occuring but not causing any adverse effects
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : null);
app.on('activate', () => mainWindow === null ? createWindow() : null);
