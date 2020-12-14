
var picPreUrl = 'https://4g-pic.oss-cn-hangzhou.aliyuncs.com/';

$(document).ready(function(){

	var urlTemp = location.href;
	var paramUrl = urlTemp.substring(urlTemp.indexOf('?'));
	var paramUrls = paramUrl.split('=');
	var key = paramUrls[1];
	var picUrl = picPreUrl + key;
	$('#pic_detail').attr('src',picUrl).click(function(){
		window.open(picUrl);
	});
})