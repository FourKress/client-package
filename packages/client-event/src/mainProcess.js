import { BrowserWindow, ipcMain, app, dialog, globalShortcut } from 'electron';
import Screenshots from 'electron-screenshots';

const initIpcMain = (mainWindow) => {
  app.whenReady().then(() => {
    ipcMain.on('set-title', (event, title) => {
      const webContents = event.sender;
      const win = BrowserWindow.fromWebContents(webContents);
      win.setTitle(title);
    });

    async function handleFileOpen() {
      const { canceled, filePaths } = await dialog.showOpenDialog();
      if (canceled) {
      } else {
        return filePaths[0];
      }
    }

    ipcMain.handle('dialog:openFile', handleFileOpen);

    const screenshots = new Screenshots();

    globalShortcut.register('esc', () => {
      screenshots.endCapture();
    });

    screenshots.on('ok', (e, buffer, bounds) => {
      const b64 = Buffer.from(buffer).toString('base64');
      mainWindow.webContents.send('result-screenshots', b64);
    });
    screenshots.on('cancel', () => {
      console.log('capture', 'cancel1');
    });
    screenshots.on('save', (e, buffer, bounds) => {
      const b64 = Buffer.from(buffer).toString('base64');
    });

    ipcMain.on('startScreenshots', () => {
      screenshots.startCapture();
    });
  });
};

export { initIpcMain };
