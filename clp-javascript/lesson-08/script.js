const numbers = [100, 200, 300, 400];

for (let i = 0; i < 4; i++) {
    console.log(numbers[i]);
}

for (const num of numbers) {
    console.log(num);
}


numbers.forEach((num,index) =>{
    console.log(`${index} ${num}`);
})


const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);



const users = [
    {
    name: "山田",
    age: 25,
    position: "engineer" 
},
{
    name: "田中",
    age: 20,
    position: "engineer" 
}
];

users.forEach((user) => {
    console.log(user.name);
})



