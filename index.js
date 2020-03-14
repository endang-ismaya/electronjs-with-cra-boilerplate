const electron = require('electron');

const {app, BrowserWindow, Menu} = electron;

let mainWindow = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    title: 'electron-cra-boilerplate',
    resizable: true
  });
  const startUrl = process.env.ELECTRON_START_URL || `file://${__dirname}/build/index.html`;

  mainWindow.loadURL(startUrl);

  mainWindow.on('close', () => {
    mainWindow = null;
    app.quit();
  });

  if (process.env.ELECTRON_START_URL) {
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
  } else {
    Menu.setApplicationMenu(null);
  }
}

const menuTemplate = [
  {
    label: 'View',
    submenu: [
      {
        role: 'reload'
      },
      {
        role: 'toggledevtools'
      }
    ]
  }
];

app.on('ready', () => {
  createMainWindow();
});
