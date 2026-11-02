// 一問目
const add = (a, b) => {
    return a + b;
};

const total = add(100, 200);
console.log(total);



// 二問目
function multiply(a, b) {
    return a * b;
}

const totals = multiply(5,3)
console.log(totals);


// 3問目
const greet = (name = "ゲスト") => {
    return name + "さん、こんにちは！";
}
console.log(greet("太郎"));
console.log(greet());



