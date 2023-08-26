// 30. Asynchronous Javascript: Promises

console.log(fetch(`https://jsonplaceholder.typicode.com/todos/1`));
fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then((res) => res.json())
    .then((data) => console.log(data));
