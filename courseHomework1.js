//Задача №1
/*
//первая  формула (V=sh)
squear = prompt('Введите площадь цилиндра', '');
height = prompt('Введите высоту цилиндра', '');
alert("V=" + squear * height);
*/

//вторая формула (V= 2ПRh)
radius = prompt('Введите радиус цилиндра', '');
height1 = prompt('Введите высоту цилиндра', '');
numberP = Math.PI * 2;
formula = numberP * radius * height1;
//alert('V=' + numberP * radius * height1);
alert(formula.toFixed(3));

/*
//Задача №2
let a = parseInt(prompt('Введите переменную A', ''));
let b = parseInt(prompt('Введите переменную B', ''));
let c = parseInt(prompt('Введите переменную C', ''));
let sum = (a + b + c);
alert(sum);

if (a % 2 == 0) {
	alert('Число А четное');
} else {
	alert('Число А не четное')
};
if (b % 2 == 0) {
	alert('Число B четное');
} else {
	alert('Число  B не четное')
};
if (c % 2 == 0) {
	alert('Число C четное');
} else {
	alert('Число C не четное')
};
*/