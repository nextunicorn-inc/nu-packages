class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    const w = window;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (w.ChannelIO) {
      return;
    }
    const ch = function () {
      // eslint-disable-next-line prefer-rest-params
      ch.c(arguments);
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ch.q = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ch.c = function (args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (w.ChannelIOInitialized) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      w.ChannelIOInitialized = true;
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      const x = document.getElementsByTagName('script')[0];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } else if (window.attachEvent) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line class-methods-use-this
  boot(settings) {
    window.ChannelIO('boot', settings);
  }

  // eslint-disable-next-line class-methods-use-this
  shutdown() {
    window.ChannelIO('shutdown');
  }
}

export default ChannelService;
