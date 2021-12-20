const inBrowser = typeof window != 'undefined';
// environment is Wechat
const inWechat =
	typeof WXEnvironment != 'undefined' && !!WXEnvironment.platform;
const weexPlatform = inWechat && WXEnvironment.platform.toLowerCase();
// Browser UA
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
const isIE = UA && /meis|trident/.test(UA);
const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
const isEdge = UA && UA.indexOf('edge/') > 0;
const isAndroid =
	(UA && UA.indexOf('android') > 0) || weexPlatform === 'android';
const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios';
const isChrome = UA && /chrome\/d+/.test(UA) && !isEdge;
