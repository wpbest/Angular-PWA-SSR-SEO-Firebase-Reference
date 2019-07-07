# Angular-PWA-SSR-SEO-Firebase-Reference

An Angular Referance PWA with SSR, SEO and Firebase (angularpwassrseofbref)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[AngularCLI](https://cli.angular.io/)

[RxJS](http://reactivex.io/rxjs/)

[Firebase] (https://firebase.google.com/docs/)

[FirebaseCLI] (https://firebase.google.com/docs/cli/)

[AnguarFire] (https://github.com/angular/angularfire2)

## Install the Angular CLI

In order to get started with Angular development, [Node.js](https://nodejs.org/en/download/) and the [Angular CLI](https://angular.io/cli) and [Firebase Tools](https://github.com/firebase/firebase-tools) is needed. To install the Angular CLI use the following command in the terminal window:

```
$ npm install -g @angular/cli
npm install -g firebase-tools
```

## Generate Code scaffolding

### ng new command switches used

#### --enable-ivy

The enable-ivy option enables the next generation renderer.

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

### Angular CLI Command

```
ng new angularpwassrseofbref --routing --style scss --enable-ivy --skip-install --skip-git
```

### Using Ivy Renderer

#### Disable Ivy! 

#### [Issue #14646 get error in ivy + SSR](https://github.com/angular/angular-cli/issues/14646).

The Angular Compiler Options are located in the project's tsconfig.app.json. Set "enableIvy: true" option to false.

```
{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": false
  }
}
```

AOT compilation with Ivy is faster and should be used by default. In the angular.json workspace configuration file, set the default build options for your project to always use AOT compilation.

```
{
  "projects": {
    "angularpwassrseofbref": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
            ...
          }
        }
      }
    }
  }
}
```
### Add a service worker to your project (PWA)

[Getting started with service workers](https://angular.io/guide/service-worker-getting-started)

Execute the following command in the terminal:

```
ng add @angular/pwa --project angularpwassrseofbref
```

#### Add Support for Apple Mobile Devices

Add the "meta name" and "link rel" tags in the ```<head>``` section in the index.html file in the src folder:

```
<link rel="apple-touch-icon" href="./assets/icons/icon-96x96.png">
<meta name="apple-mobile-web-app-status-bar" content="#1976d2">
<meta name="apple-mobile-web-app-title" content="AngularReference">
```

### Add Server-side Rendering (SSR)

[Server-side Rendering (SSR): An intro to Angular Universal](https://angular.io/guide/universal)

Execute the following command in the terminal:

```
ng add @nguniversal/express-engine --clientProject angularpwassrseofbref
```
## Add SEO (Search Engine optimization)

Create the file robots.txt to the src folder and create the text

```
User-agent: *
Allow: /
```

Create the file sitemap.xml to the src folder and create the text

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>localhost/</loc>
      <lastmod>2019-07-03</lastmod>
      <changefreq>always</changefreq>
      <priority>1.0</priority>
   </url>
</urlset>
```

Modify angular.json and add "src/robots.txt" and "src/sitemap.xml" in tha assets,

```
            "assets": [
              "src/favicon.ico",
              "src/assets",
              "src/robots.txt",
              "src/sitemap.xml,
              "src/manifest.webmanifest"
            ],
```

Add the meta data in the ```<head>``` section in the intex.html file in the src folder:

```
  <meta name="description" content="This is a meta description sample. We can add up to 160 characters.">
```

## Add Firebase Functionality

Add the needed packages

```
npm install firebase @angular/fire --save
```

### Import the AngularFire libraries

Modify app.module.ts to import the Firebase libraries. Add the import for environment

```
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) // service worker
  ],
  ...
})  
```

Modify environment.ts and environment.prod.ts and add the firebase credentials.

environment.ts:
```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: '...',
    authDomain: '...',
    databaseURL: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...'
  }
};
```

environment.prod.ts

```
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: '...',
    authDomain: '...',
    databaseURL: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...'
  }
};
```

### Setup Firebase Tools

```
firebase login
? Allow Firebase to collect anonymous CLI usage and error reporting information? (Y/n) Y

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=...

Waiting for authentication...

Select the google account and then Authorize it for firebase

+  Success! Logged in as wpbest@gmail.com

firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/william.best/Documents/GitHub/angular-pwa-ssr-seo-firebase

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
ces. 
 ◯ Database: Deploy Firebase Realtime Database Rules
❯◉ Firestore: Deploy rules and create indexes for Firestore
 ◉ Functions: Configure and deploy Cloud Functions
 ◉ Hosting: Configure and deploy Firebase Hosting sites
 ◉ Storage: Deploy Cloud Storage security rules

You're about to initialize a Firebase project in this directory:

  /Users/william.best/Documents/GitHub/angular-pwa-ssr-seo-firebase

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
ces. Firestore: Deploy rules and create indexes for Firestore, Functions: Configure and deploy Cloud Functions, Hosting: Configure a
nd deploy Firebase Hosting sites, Storage: Deploy Cloud Storage security rules

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: 
❯ angular-pwa-ssr-seo-firebase (angular-pwa-ssr-seo-firebase) 

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? (firestore.rules) 

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? (firestore.indexes.json) 


=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? 
  JavaScript 
❯ TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? (Y/n) Y

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/tslint.json
✔  Wrote functions/tsconfig.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? (Y/n) Y

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) Y
✔  Wrote dist/index.html

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? (storage.rules)

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

### Use Firebase Cloud Functions for SSR

Modify the firebase.json file:

```
{
  "hosting": {
    "public": "dist/browser",
     // ...
    "rewrites": [
      {
        "source": "**",
        "function": "ssr"
      }
    ]
  }
}
```

Remove the Express Server Listener

When deploying to AppEngine we need to tell the server to listen to requests. In Cloud Functions, this is already happening under the hood, so we need to update our server code.

Make sure to export the express app, then remove the call to listen.

```
export const app = express();

// ...

// remove or comment out these lines

// Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// })
```

Update the Webpack Config file webpack.server.config.js

```
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist'),
    library: 'app',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
```
Add Firebase Polyfills to Express

Firebase uses Websockets and XHR not included in Angular that we need to polyfill.

```
npm install ws xhr2 bufferutil utf-8-validate  --save
```

Modify server.ts by declaring them on Node global at the top of the file.

```
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');
```
The function itself only needs to import the universal app into the current working directory. That’s why we need to copy it to the function’s environment.
Modify index.ts

```
import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app;

export const ssr = functions.https.onRequest(universal);
```

Update the package.json build:ssr to call the functions build script. Also update the serve:ssr to call firebase serve.

```
{
  "scripts": {
    "serve:ssr": "firebase serve",
    "build:ssr": "npm run build:client-and-server-bundles && npm run compile:server && npm run build:functions",
  }
}
```


Update the package.json in the functions subdirectory build script. Notice the functions to be deployed with Node v8.

```
{
  "name": "functions",
  "engines": {
    "node": "8"
  },
  "scripts": {
    ...
    "build": "mkdir -p dist && rm -r ./dist && cp -r ../dist . && tsc",
    ...
  }
}
```

## Install Node Packages in the Angular application and the Firebase functions.

```
npm install
cd functions
npm install
cd ..
```

### Install NPM Check Update (NCU) ad Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
npm install -g npm-check-updates
ncu
ncu -u
```

## Compile the Angular Client and Express Server Code.

```
npm run build:ssr
```

## Run Angular Client and Express Server.

```
npm run serve:ssr
```

## Deploy Firebase Project

```
firebase deploy

=== Deploying to 'angular-pwa-ssr-seo-firebase'...

i  deploying storage, firestore, functions, hosting
Running command: npm --prefix "$RESOURCE_DIR" run lint

> functions@ lint C:\Users\willi\OneDrive\Documents\GitHub\angular-pwa-ssr-seo-firebase\functions
> tslint --project tsconfig.json

Running command: npm --prefix "$RESOURCE_DIR" run build

> functions@ build C:\Users\willi\OneDrive\Documents\GitHub\angular-pwa-ssr-seo-firebase\functions
> node cp-angular && tsc

+  functions: Finished running predeploy script.
i  storage: checking storage.rules for compilation errors...
+  storage: rules file storage.rules compiled successfully
i  firestore: checking firestore.rules for compilation errors...
i  firestore: reading indexes from firestore.indexes.json...
+  firestore: rules file firestore.rules compiled successfully
i  functions: ensuring necessary APIs are enabled...
+  functions: all necessary APIs are enabled
i  storage: uploading rules storage.rules...
i  firestore: uploading rules firestore.rules...
+  firestore: deployed indexes in firestore.indexes.json successfully
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (3.05 MB) for uploading
+  functions: functions folder uploaded successfully
i  hosting[angular-pwa-ssr-seo-firebase]: beginning deploy...
i  hosting[angular-pwa-ssr-seo-firebase]: found 28 files in dist/browser
+  hosting[angular-pwa-ssr-seo-firebase]: file upload complete
+  storage: released rules storage.rules to firebase.storage/angular-pwa-ssr-seo-firebase.appspot.com
+  firestore: released rules firestore.rules to cloud.firestore
i  functions: updating Node.js 8 function ssr(us-central1)...
+  functions[ssr(us-central1)]: Successful update operation.
i  hosting[angular-pwa-ssr-seo-firebase]: finalizing version...
+  hosting[angular-pwa-ssr-seo-firebase]: version finalized
i  hosting[angular-pwa-ssr-seo-firebase]: releasing new version...
+  hosting[angular-pwa-ssr-seo-firebase]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/angular-pwa-ssr-seo-firebase/overview
Hosting URL: https://angular-pwa-ssr-seo-firebase.firebaseapp.com
```


Browse to [`http://localhost:4000/`](http://localhost:4000/)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
