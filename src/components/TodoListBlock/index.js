import TodoItem from "@components/TodoItem";
import { useSelector, useDispatch } from "react-redux";

const TodoListBlock = () => {
    const todos = useSelector((state) => state.todo.todoItemList);
    const dispatch = useDispatch();

    const handleUpdate = (updateTodo) => {
        dispatch(update({...updateTodo}));
    }


    return (
        <div className="flex justify-center flex-wrap mt-5">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate}/>
            ))}
        </div>
    );
}

export default TodoListBlock;