console.log('------------- #4');

function sum (a, b) {
    return a + b;
}
console.log('Сума двох чисел: ' + sum(3, 4));

function sub (a, b) {
    return a - b;
}
console.log('Різниця двох чисел: ' + sub(13, 4));

function mul (a, b) {
    return a * b;
}
console.log('Добуток двох чисел: ' + mul(3, 4));

function div (a, b) {
    return a / b;
}
console.log('Частка двох чисел: ' + div(12, 4));

console.log('------------- #5');

function sequence (num) {
    let start = 0;
    let str = "";
    while (start < num) {
        start++;
        str +=start + " ";   
    }
    return str  
}
console.log (sequence(8));

console.log('------------- #6');

function sequence1 (num2) {
   
    let str1 = "";
    while (num2 >= 1) {
        str1 +=num2 + " ";
        num2--;   
    }
   return str1
}
console.log (sequence1(8));

console.log('------------- 7');

function pow (x, n) {
    return x ** n;
}

console.log (pow(3, 2));

console.log('------------- 8');

function isBigger(n1, n2) {
    if (n1 > n2) {
        return true;
    } else {
        return false;
    }
}
console.log(isBigger(5, -1));

console.log('------------- 9');
function isSmaller (n3, n4) {
    if (n3 < n4) {
        return true;
    } else {
        return false;
    }
}
console.log(isSmaller(5, -1));