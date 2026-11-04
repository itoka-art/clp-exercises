

// 演習問題
setTimeout(() => {
    console.log("3秒経過しました");
}, 3000);


const timerId = setTimeout(() => {
    console.log("表示されません");
}, 2000);

clearTimeout(timerId);


const intervalId = setInterval(() => {
    console.log("表示されません");
},1000);

clearInterval(intervalId);