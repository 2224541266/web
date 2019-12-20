
const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');
const myImage = document.querySelector('img');
if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storageName = localStorage.getItem('name');
	myHeading.textContent = '超简单web页面' + storageName;
}

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		 myImage.setAttribute('src','images/firefox2.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}	
}

function setUserName(){
	let myName = prompt("请输入您的姓名");
	if(!myName || myName === null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
	    myHeading.textContent = '超简单web页面' + myName;
	}	
}
myButton.onclick = function(){
	setUserName();
}