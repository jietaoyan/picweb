$(document).ready(function(){
	
	//定时刷新
	var refresh = setInterval(function(){
		getPicFromServer();
	}, 1000 * 5);
	
})

var serverUrl = 'http://tuodi.mvtlabs.com:18088/tuodi/pic/list-pic';
var picPreUrl = 'https://4g-pic.oss-cn-hangzhou.aliyuncs.com/';
var picsNow =[];
var maxPicNum = 17;

getPicFromServer();
function getPicFromServer(){
	$.getJSON(serverUrl,function(data){
		// console.log(data);
		// debugger;
		if (data && data.code == 0) {
			var pics = data.data;
			if (pics && pics.length > 0) {
				var tempPic1 = pics[0];
				if (picsNow && picsNow.length > 0) {
					var nowPic1 = picsNow[0];
					if (nowPic1 == tempPic1) {
						//返回值与现有相同则不替换
						return;
					} else{
						picsNow = pics;
						setImgPic();
					}
				}else {
					picsNow = pics;
					setImgPic();
				}
			}
		}

	})
}

function setImgPic(){
	var len = picsNow.length;
	for(var i = 0; i < len && i < maxPicNum; i++){
		var picKey = picsNow[i].key;
		$("#gallery" + i).attr("src", picPreUrl + picKey);
		$("#gallery" + i).click(function(){
			var imgkey = $(this).attr('src').replace(picPreUrl,'');
			var url = 'picshow.html?key=' + imgkey;
			window.open(url);
		})
	}
}


/**
{"code":0,
"message":"执行成功",
"data":[
{"key":"2020-12-12-16:48:57.jpg","time":1607762937000,"date":1607762937.000000000,"size":187384},
{"key":"2020-12-12-16:48:56.jpg","time":1607762936000,"date":1607762936.000000000,"size":186764},
{"key":"2020-12-12-16:48:51.jpg","time":1607762931000,"date":1607762931.000000000,"size":183448},
{"key":"2020-12-12-16:48:50.jpg","time":1607762930000,"date":1607762930.000000000,"size":179969},
{"key":"2020-12-12-08:44:52.jpg","time":1607762692000,"date":1607762692.000000000,"size":183572},
{"key":"2020-12-12-08:44:51.jpg","time":1607762691000,"date":1607762691.000000000,"size":183089},
{"key":"2020-12-12-08:37:33.jpg","time":1607762253000,"date":1607762253.000000000,"size":185590},
{"key":"2020-12-12-08:37:31.jpg","time":1607762251000,"date":1607762251.000000000,"size":187456},
{"key":"2020-12-12-08:36:22.jpg","time":1607762182000,"date":1607762182.000000000,"size":186854},
{"key":"2020-12-12-08:32:14.jpg","time":1607761934000,"date":1607761934.000000000,"size":186498},
{"key":"2020-12-12-08:32:10.jpg","time":1607761931000,"date":1607761931.000000000,"size":186564},
{"key":"2020-12-12-08:32:07.jpg","time":1607761927000,"date":1607761927.000000000,"size":186145},
{"key":"2020-12-12-08:32:05.jpg","time":1607761926000,"date":1607761926.000000000,"size":186123},
{"key":"2020-12-12-08:32:01.jpg","time":1607761921000,"date":1607761921.000000000,"size":186082},
{"key":"2020-12-12-08:31:55.jpg","time":1607761915000,"date":1607761915.000000000,"size":185823},
{"key":"2020-12-12-08:31:37.jpg","time":1607761897000,"date":1607761897.000000000,"size":185492},
{"key":"2020-12-12-08:31:25.jpg","time":1607761885000,"date":1607761885.000000000,"size":185096},
{"key":"2020-12-12-08:31:00.jpg","time":1607761860000,"date":1607761860.000000000,"size":186720}]
}*/