function factorial(n) {
    if(n<0) return null;
    if(n===0) return 1;
    return n * factorial(n-1);
}
//console.log(factorial(5));

function sumOfN(num) {
    if(num<0) return null;
    if(num===0) return 0;
    return num + sumOfN(num-1);
}
//console.log(sumOfN(5));

function reverse(str) {
    if(str.length === 0) return '';
    return reverse(str.slice(1)) + str[0];
}
//console.log(reverse('Zuhair'));

function reverseString(str, i=0) {
    if(i === str.length) return '';
    return reverseString(str, i+1) + str[i];
}
//console.log(reverseString('hello'));

function fibinocci(num) {
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fibinocci(num-1) + fibinocci(num-2);
}
console.log(fibinocci(3));

function sumOfDigits (n) {
    if(n === 0) return 0;
    return (n%10) + sumOfDigits(Math.floor(n/10));
}
//console.log(sumOfDigits(123456));
