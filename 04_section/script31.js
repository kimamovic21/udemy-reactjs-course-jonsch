// 31. Asynchronous Javascript: Async/Await

const getTodos = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    console.log(response);

    const data = await response.json();
    console.log(data);

    return data;
};
const todos = getTodos();
console.log(todos);

console.log('kerim');