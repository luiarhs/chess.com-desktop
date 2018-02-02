/*
** Module: Main.js
** @autor: Luis Angel
*/
const electron = require('electron')
const path = require('path')
const url = require('url')
// Module to control application life.
const {app, BrowserWindow, shell} = electron
// Module to create native browser window.

let mainWindow, addWindow

app.on('ready', function () {
  // Create the browser window and disable node.js (it is neede to work with pre-compiled js of external url)
  mainWindow = new BrowserWindow({
    title: 'Chess.com',
    width: 800,
    height: 640,
    webPreferences: {
      nodeIntegration: false
    },
    show: false
  })

  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Load the url
  mainWindow.loadURL('https://www.chess.com')

  //hide the default menu
  mainWindow.setMenu(null)

  //prevent window title changing
  // mainWindow.on('page-title-updated', event => {
  //   event.preventDefault()
  // })

  // When contents are loaded show main window
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });

  // Emitted when the window is closed.
  mainWindow.on('close', function () {
    if (mainWindow !== null) mainWindow = null
  })

  // mainWindow.webContents.on('new-window', (event, url) => {
  //   event.preventDefault()
  //   var urlDest = url.split('=')[1]
  //   shell.openExternal(decodeURIComponent(urlDest))
  // });

});