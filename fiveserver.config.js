// fiveserver.config.js
module.exports = {
    host: '0.0.0.0', // default: '0.0.0.0' (could also be 'localhost' for example)
    remoteLogs: 'magenta', // true | false | Color
    useLocalIp: true, // optional: opens browser with your local IP
      /** Use the /.cache/URL route to cache resources in memory. */
  cache: false,
    /** Enable CORS. (default: true) */
    cors: true,
  }