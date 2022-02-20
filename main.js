function sayHello(){
	let i=0;
	let div = document.getElementById('content');
	while(i<10){
		let img = document.createElement('img');
		img.src = 'https://donatepay.ru/uploads/notification/images/405143_1611512491.gif';
		div.appendChild(img);
		i+=1;
	}

}