import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Angular App</h1><h1>Node Version: {{nodeVersion}}</h1><h2>Chromium Version:{{chromiumVersionNumber}}</h2><h3>Electron Version number: {{electronVersionNumber}}</h3>'
})
export class AppComponent {
    public nodeVersion = process.versions.node;
    public chromiumVersionNumber = process.versions.chrome;
    public electronVersionNumber = process.versions.electron;
    constructor() {
        const remote = require('electron').remote;
        const BrowserWindow = remote.BrowserWindow;

        var win = new BrowserWindow({ width: 800, height: 600 });        
        win.loadURL('https://github.com');
    }
}