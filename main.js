let students = [
{id: 1, name: 'andrey', surname:'artamonov'},
{id: 2, name: 'daria', surname:'arhipova'},
{id: 3, name: 'nicolai', surname:'barkalov'},
{id: 4, name: 'georgiy', surname:'bochkarev'},
{id: 5, name: 'matvei', surname:'gavrilov'}
]

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
let id_current = 0
function load_student(id){
	let head = document.getElementById('zagolovok')
	head.textContent = 'Info about student № '+ students[id].id

	let span1 = document.getElementById('name')
	span1.textContent = students[id_current].name
	let span2 = document.getElementById('surname')
	span2.textContent = students[id_current].surname
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