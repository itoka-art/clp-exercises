// 条件式
let temp = 30;

if (temp >= 35) {
    console.log("猛暑日です");
}else if (temp >= 30) {
    console.log("真夏日です");
}else{
    console.log("涼しいです");
    
};

// ボタンの要素を取得

const button = document.querySelector(".button");

if (!button) {
    console.log("ボタンがありません");
}

const checkButton = () => {
    if (!button) {
        return
    }
    console.log(button);
};

checkButton();

button?.addEventListener("click", () => {
    console.log("クリック成功！");
})



