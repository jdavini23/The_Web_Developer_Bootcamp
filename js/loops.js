var num = -10;
var even = 10;
var odd = 300;
var divide = 5;
while (num <= 19) {
	console.log(num);
	num++;
};
while (even <= 40) {
	console.log(even);
	even+=2;
}
while (odd <= 333) {
	if (odd % 2 !== 0) {
	console.log(odd);
	}
	odd++;
}
while (divide <= 50) {
	if (divide % 5 === 0 && divide % 3 === 0) {
	console.log(divide);
	}
	divide++;
}