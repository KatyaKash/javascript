hide = true;
function sayHello(){
	if (hide == true){
		document.getElementById('kartinka').src = 'https://media.kg-portal.ru/anime/t/tokyoghoul/trailers/19643t.jpg'
		hide = false;
	}
	else {
		document.getElementById('kartinka').src = '';
		hide = true
	}


}