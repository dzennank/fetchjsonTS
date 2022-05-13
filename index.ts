import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const Title = todo.title;
    const ID = todo.id;
    const isCompleted = todo.completed;

    console.log(`The todo with id: ${ID} has a title of ${Title}
    Is it finished? ${isCompleted}`)
})
