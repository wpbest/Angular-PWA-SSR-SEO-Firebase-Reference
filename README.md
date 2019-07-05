# Angular-PWA-SSR-SEO-Firebase-Reference

An Angular Referance PWA with SSR, SEO and Firebase

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
    "ng8template": {
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

## Install Node Packages

```
npn install
```

## Install NPM Check Update (NCU) ad Check packages.json for outdated packages

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
