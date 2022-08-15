export const getStringHTML = (content: unknown) => content as string;

export const getGTMScriptHTML = () => `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process.env.GTM_ID as string}');`;

export const getGTMLScriptIframe = () =>
  '<iframe src="https://www.googletagmanager.com/ns.html?id={process.env.GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />';

export const getAmplitudeScriptHTML =
  () => `(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");
    r.type="text/javascript";r.integrity="sha384-6T8z7Vvm13muXGhlR32onvIziA0TswSKafDQHgmkf6zD2ALZZeFokLI4rPVlAFyK";
    r.crossOrigin="anonymous";r.async=true;r.src="https://cdn.amplitude.com/libs/amplitude-8.18.4-min.gz.js";
    r.onload=function(){if(!e.amplitude.runQueuedFunctions){console.log("[Amplitude] Error: could not load SDK")}};
    var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s);
    function i(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
    var o=function(){this._q=[];return this};var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"];
    for(var c=0;c<a.length;c++){i(o,a[c])}n.Identify=o;var l=function(){this._q=[];
    return this};var u=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];
    for(var p=0;p<u.length;p++){i(l,u[p])}n.Revenue=l;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut",
    "setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup",
    "logRevenueV2","regenerateDeviceId","groupIdentify","onInit","onNewSessionStart","logEventWithTimestamp","logEventWithGroups",
    "setSessionId","resetSessionId","getDeviceId","getUserId","setMinTimeBetweenSessionsMillis","setEventUploadThreshold",
    "setUseDynamicConfig","setServerZone","setServerUrl","sendEvents","setLibrary","setTransport"];
    function v(t){function e(e){t[e]=function(){t._q.push([e].concat(Array.prototype.slice.call(arguments,0)))}}
    for(var n=0;n<d.length;n++){e(d[n])}}v(n);n.getInstance=function(e){e=(!e||e.length===0?"$default_instance":e).toLowerCase();
    if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])}
    return n._iq[e]};e.amplitude=n})(window,document);amplitude.getInstance().init('${
      process.env.AMP_ID as string
    }', null, {apiEndpoint: 'msgqvnloil.execute-api.ap-northeast-2.amazonaws.com/prod'});`;
