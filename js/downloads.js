window.onload = function(){
  var sBrowser, sUsrAg = navigator.userAgent;

    if(sUsrAg.indexOf("Chrome") > -1) {
	sBrowser = "tosdr-chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
	sBrowser = "tosdr-safari";
    } else if (sUsrAg.indexOf("Opera") > -1) {
	sBrowser = "tosdr-opera";
    } else if (sUsrAg.indexOf("Firefox") > -1) {
	sBrowser = "tosdr-firefox";
    } else if (sUsrAg.indexOf("MSIE") > -1) {
	sBrowser = "tosdr-ie";
    }
    document.location.hash = sBrowser;
}
