function downfile()
{
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		alert("在页面右上方选择在浏览器中打开");	
	} else {
		location.href="resource/resource.zip"
	}
}