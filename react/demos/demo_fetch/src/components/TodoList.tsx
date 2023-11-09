import * as TodoService from '../services/todo.service';
import { TodoDto } from '../services/todo.dto';
import { useState, useEffect } from 'react';

export function TodoList() {
    const [dados,setDados] = useState<TodoDto[]>([]);
    const [status,setStatus] = useState('idle');
    const [erro,setErro] = useState('');

    useEffect(() => {
        const getTodos = async () => {
            try {
                const todos = await TodoService.getAllTodos();
                setStatus('resolved');
                setDados(todos);
                setErro('');
            } catch (error) {
                setStatus('rejected');
                setDados([]);
                setErro((error as Error).message);
            }
        };
        setStatus('pending');
        getTodos();
    },[]);

    if (status === 'idle' || status === 'pending') {
        return (<div>...</div>);
    }
    if (status === 'rejected') {
        return (<div>Falha de consulta: {erro}</div>);
    }
    if (status === 'resolved') {
        return (
            <ul>
                {
                    dados.map(todo => (
                        <li key={todo.id}>
                            {todo.title} {todo.completed?'🐸':'❌'}
                        </li>
                    ))
                }
            </ul>
        );
    }
    return (<></>);
}