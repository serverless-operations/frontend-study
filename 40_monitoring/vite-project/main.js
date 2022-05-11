import './style.css';

import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://712b17e36f3a4c399fbb88dbc951e483@o1221569.ingest.sentry.io/6394874',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

// first();

function first() {
  second();
}
function second() {
  third();
}

function third() {
  myUndefinedFunction();
}
