let students = [
{id: 1, name: 'andrey', surname:'artamonov'},
{id: 2, name: 'daria', surname:'arhipova'},
{id: 3, name: 'nicolai', surname:'barkalov'},
{id: 4, name: 'georgiy', surname:'bochkarev'},
{id: 5, name: 'matvei', surname:'gavrilov'}
]

for (let i = 0; i < students.length; i++) {
	let id = students[i].id
	let name = students[i].name
	let surname = students[i].surname
	console.log('number: ' + id)
	console.log('name: ' + name)
	console.log('surname: ' + surname)
	console.log('-------------------')
}