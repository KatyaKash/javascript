let a = 4;
let b = -4;
let c = 1;
let x1,x2,x;

let d = b*b-4*a*c;

if (d>0) {
		x1=(-b + Math.sqrt(d))/(2*a);
		x2=(-b - Math.sqrt(d))/(2*a);
		console.log(`x1 = ${x1}`);
		console.log(`x2 = ${x2}`);
}
else if(d==0){
		x=(-b)/(2*a);
		console.log(`x = ${x}`);
}
else {
	console.log('действительных корней нет')
}
