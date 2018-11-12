#!/usr/bin/env node

'use strict';

const carlo = require('carlo');

(async () => {
  const app = await carlo.launch();
  app.on('exit', () => process.exit());
  app.serveFolder(__dirname);
  await app.load('clock.html');
})();
