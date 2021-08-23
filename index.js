const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {

    //Criando uma nova janela
    const MinhaJanela = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    //Carregando a página html
    MinhaJanela.loadFile('index.html');
})