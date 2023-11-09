import { TodoDto } from "./todo.dto";

const uriBase = 'https://jsonplaceholder.typicode.com/todos';

export async function getAllTodos():Promise<TodoDto[]> {
    const resposta = await fetch(uriBase);
    if (!resposta.ok) {
        throw new Error(`Requisição falhou: ${resposta.status}`);
    }
    return resposta.json();
}
