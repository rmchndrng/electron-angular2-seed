# Electron - Angular2 -  Typescript - Visual Studio Code - Seed
Electron using Angular2 seed project which can be setup easily with Visual Studio Code

Steps I had to follow to get this project up and running using Visual Studio Code

If you have NPM, Visual Studio Code and Typescript installed, you can go directly to Step 4.
(ie. run "npm install" and "npm start" using command prompt at the root folder.)

1. Install Node.js
The project and development depends heavily on npm (Node package manager) to resolve javascript packages. 
Npm is best intalled directly along with the NodeJS installation.(On Windows)

2. Install Visual Studio Code.
https://code.visualstudio.com/

3. Install Typescript
http://www.typescriptlang.org/

4. Cloned the Quickstart repository provided at Electron site
# Clone the Quick Start repository
$ git clone https://github.com/electron/electron-quick-start

5. Added a simple angular application
    a. Updated the package.json
        1. Added and modified the npm scripts
        "scripts": {
            "tsc:w": "tsc -w",
            "start": "concurrent \"npm run tsc:w\" \"electron main.js\" "        
        }
        2. Added dependencies required for Angular2
        3. Added devDependencies required for Angular2
    b. Installed tsd
        npm install tsd -g
    c. Installed typing definition for Electron
       Run the following tsd command in the application root folder.
       "tsd install github-electron"
    d. Added the folder "app" under the root folder containing a simple Angular2 app.

6. Went through the Typescript support documentation of Visual studio code to configure it to build the code.
https://code.visualstudio.com/Docs/languages/typescript
(Added settings.json. Please go through the configuration files tsconfig.json and settings.json to understand the various settings for this project.)
settings.json - Added exclusion rules for few files based on extensions and folder names. 
This will prevent them from showing up in the Visual studio code navigator.

7. Run the command "npm install" to install all the dependencies specified in package.json using command prompt at the root folder.

8. Run the command "npn start" to run the sample application.(script specified in package.json) using command prompt at the root folder.
It calls the typescript compiler in watch mode based on tsconfig.json settings. 
So whenever you change a ts file, the compiler will automatically transpile to JS and the server will reload the corresponding page automatically.
This makes the development experience very easy.

The application is up and running. Dive deep into each of the configuration files and explore the various settings. 
Understanding them will definitely help during development.

Happing coding and enjoy Electron and Angular2 with Visual Studio Code.
 
