import './style.css';

import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

const appReleaseVersion = import.meta.env.VITE_APP_RELEASE_VERSION;
const sentryDSN = import.meta.env.VITE_SENTRY_DSN;

Sentry.init({
  dsn: sentryDSN,
  integrations: [new BrowserTracing()],
  release: appReleaseVersion,
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
