import { app, BrowserWindow } from 'electron';

const loadUrl: string = process.env.NODE_ENV === 'production' ? `file://${__dirname}/index.html` : `http://localhost:4200/`;


let mainWindow: BrowserWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    center: true,
    webPreferences: {
      backgroundThrottling: false
    }
  });

  mainWindow.loadURL(loadUrl);
  console.log(`loaded url is: ${loadUrl}`);
  mainWindow.on('closed', () => {
    app.quit();
  });
});
