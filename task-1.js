window.onload=function() {
 	var boxs = document.getElementsByClassName('div1');
	//获取相应区间内的随机数的封装
	function getRandomNum(low, high) {
		var ch = high - low + 1;
		return Math.floor(Math.random() * ch + low);
	}
	//获取随机颜色的封装
	function getRandomColor() {
		var colorArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		var color = "#";
		for(var i = 0; i < 6; i++){
			color += colorArray[getRandomNum(0, 15)];
		}
		return color;		
	}
	//主要实现代码
	function start() {
		for(var i = 0; i < boxs.length; i++) {
			boxs[i].style.background= "#FFA500";
		}
		var box = Array(3);
		for(var i = 0; i < box.length; i++) {
			var a = getRandomNum(0, 8);
			if(i == 0) {
			box[i] = a;
			}else {
				for(var j = 0; j < i; j++) {
					if(a == box[j]) {
					i--;
					}else {
						box[i] = a;
					}
				}
			}
		}
		var colorNew = Array(3);
			for(var i = 0; i < colorNew.length; i++) {
				var c = getRandomColor();
				if (c == "#FFA500") {
					i--;
				}else {
					if (i==0) {
						colorNew[i] = c;
					}else {
						for (var j=0; j<i; j++) {
							if (c == colorNew[j]) {
								i--;
							}else {
								colorNew[i] = c;
							}
						}
					}
				}
				// if(i == 0) {
				// 	colorN[i] = c;
				// }else {
				// 	for(var j=0; j < i; j++){
				// 		if(c == colorN[j]) {
				// 			i--;
				// 		}else {
				// 			colorN[i] = c;
				// 		}
				// 	}
				// }
			}
		for(var i = 0; i < box.length; i++){
			boxs[box[i]].style.background = colorNew[i];
		}	
	}
	function btn() {
		var btn1 = document.getElementsByClassName('btn1');
		var set;
		function myTime() {
			clearInterval(set);
			set = setInterval(start, 1000);
		}
		function stopTime() {
			for(var i = 0; i < boxs.length; i++) {
				boxs[i].style.background = "#FFA500";
			}
			clearInterval(set);
		}
		btn1[0].addEventListener("click", myTime);
		btn1[1].addEventListener("click", stopTime);
	}
	btn();
} 