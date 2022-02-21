let students = []
let id_current = 0

// загружаем файл с сайта
function load_from_site(){
//1. Создаем новый XMLHttpRequest-объект
	let xhr = new XMLHttpRequest();
// 2. Настраиваем его: GET-запрос по URL http://217.71.129.139:4035/students.php
	xhr.open('GET', 'http://217.71.129.139:4035/students.php');
//3.Отсылаем запрос
	xhr.send();
//4.Сработает после того, как мы получим огтвет от сервера
	xhr.onload = function(){
		if (xhr.status != 200){
			alert(`Error ${xhr.status}: ${xhr.statusText}`); // например 404: Not Found
		}
		else{
			students = JSON.parse(xhr.responseText)['response']
		}
	};
	xhr.onerror = function(){
		alert('запрос не удался');
	};
}



function load_all() {
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname

		//создадим стрку и 3 ячейки
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		//запишем данные в ячейк
		td1.textContent = id;
		td2.textContent = name;
		td3.textContent = surname;
		//вставим ячейку в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		//вставим строку в таблицу
		table.appendChild(tr)
	}
}
//let id_current = 0
function load_student(id){
	let img = document.getElementById('logo')
	img.src = 'http://217.71.129.139:4035/'+ students[id].logo
	let head = document.getElementById('zagolovok')
	head.textContent = 'Info about student № '+ students[id].id
	let span1 = document.getElementById('name')
	span1.textContent = students[id_current].name
	let span2 = document.getElementById('surname')
	span2.textContent = students[id_current].surname

	let scores = document.getElementById('scores')
	let sum = 0;
	for(let i = 0; i < students[id].scores.length; i++){
		console.log(students[id].scores[i])
		sum+=students[id].scores[i]
	}
	scores.textContent = students[id].scores
	//let sred = document.getElementById('sred')
	sred.textContent = sum/(students[id].scores.length)
}

function Next(){
	id_current++
	if (id_current > 0) {
		document.getElementById('btn_prev').disabled = false
	}
	if (id_current===students.length-1){
		document.getElementById('btn_next').disabled = true

	}
	load_student(id_current)
}
function Prev()	{
		id_current--
	if (id_current === 0) {
		document.getElementById('btn_prev').disabled = true
	}
	if (id_current > 0){
		document.getElementById('btn_next').disabled = false

	}
	load_student(id_current)
}

