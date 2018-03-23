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
		var colorN = Array(3);
		for(var i = 0; i < colorN.length; i++) {
			var c = getRandomColor();
			if (c == "#FFA500") {
				i--;
			}else {
				if (i==0) {
					boxs[box[i]].style.background = c;
				}else {
					for (var j=0; j<i; j++) {
						if (c == colorN[j]) {
							i--;
						}else {
							boxs[box[i]].style.background = c;
						}
					}
				}
			}
		}
	}
	function btn() {
		var btn1 = document.getElementsByClassName('btn1');
		var set;
		var myState = true;//定义一个状态
		function myFlash(){
			if (myState) {//if语句判断状态是为“真”时，执行函数
				clearInterval(set);//防止延时函数速度叠加
				set = setInterval(start, 1000);	
			}
			myState = false;//执行函数后状态变为“假”，防止按钮被重复点击
		}
		function stopFlash() {
			myState = true;//点击关闭按钮时，状态变为“真”，以便“真”时，开始闪函数可以再执行。
			for(var i = 0; i < boxs.length; i++) {
				boxs[i].style.background = "#FFA500";
			}
			clearInterval(set);
		}
		btn1[0].addEventListener("click", myFlash);
		btn1[1].addEventListener("click", stopFlash);	
	}
	btn();
}