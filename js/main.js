let students = []
let id_current = 0

// загружаем информацию с сайта
function load_from_site(){
	// 1. Создаем новый XMLHttpRequest-объект
	let xhr = new XMLHttpRequest();
	// 2. Настраиваем его: GET-запрос по URL http://217.71.129.139:4035/students.php
	xhr.open('GET', 'http://217.71.129.139:4035/students.php');
	// 3. Отсылаем запрос
	xhr.send();
	// 4. Сработает после того, как мы получим огтвет от сервера
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
		let td4 = document.createElement('button#more')

		//запишем данные в ячейк
		td1.textContent = id;
		td2.textContent = name;
		td3.textContent = surname;
		td4.textContent = 'Подробно';

		//вставим ячейку в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		//вставим строку в таблицу
		table.appendChild(tr)
	}
}


function load_student(id){
	$('#logo').prop('src', 'http://217.71.129.139:4035/'+ students[id].logo) 
	$('#zagolovok').prop('textContent','Информация о студенте № ' + students[id].id)
	$('#name').prop('textContent', students[id].name)
	$('#surname').prop('textContent', students[id].surname)
	$('#scores').prop('textContent', students[id].scores)

	let sum = 0;
	for(let i = 0; i < students[id].scores.length; i++){
		//console.log(students[id].scores[i])
		sum+=students[id].scores[i]
	}
	$('#sred').prop('textContent',  sum / (students[id].scores.length))
}

function Next(){
	load_student(id_current)
	id_current++

	if (id_current > 0) {
		document.getElementById('btn_back').disabled = false
	}
	if (id_current===students.length-1){
		document.getElementById('btn_next').disabled = true
	}
}
function Back()	{
	load_student(id_current)
		id_current--
	if (id_current === 0) {
		document.getElementById('btn_back').disabled = true
	}
	if (id_current > 0){
		document.getElementById('btn_next').disabled = false
	}
}

$("#more").on("click"), function(){
	load_student(0)
}