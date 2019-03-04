const n = parseInt(prompt('Enter Fibonacci number: '));


function bringFibNum(n) {
    let first = 1, second = 1;
    let res;
    for (let i = 3; i <= n; i++) {
        let next = first + second;
        first = second;        
        second = next;   
    }
    return second;
}
const res = bringFibNum(n);
alert ('Сycle result: ' + res);

