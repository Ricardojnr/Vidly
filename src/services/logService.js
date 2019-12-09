import * as Sentry from "@sentry/browser";

function init() {
  //   Sentry.init({
  //     dsn: "https://c1853dd444384729be9ac261c2698126@sentry.io/1840317"
  //   });
}

function log(error) {
  //   Sentry.captureException(error);
}

export default {
  init,
  log
};
