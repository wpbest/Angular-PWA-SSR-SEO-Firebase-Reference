import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const universal = require(`${process.cwd()}/dist/server`).app;

export const ssr = functions.https.onRequest(universal);
