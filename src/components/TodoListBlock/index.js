import TodoItem from "@components/TodoItem";
import { useSelector, useDispatch } from "react-redux";

const TodoListBlock = () => {
    const todos = useSelector((state) => state.todo.todoItemList);
    const dispatch = useDispatch();

    const isFavorite = (updateTodo) => ({ type: "todo/isFavorite", payload: updateTodo });
    const isCompleted = (updateTodo) => ({ type: "todo/isCompleted", payload: updateTodo });
    const remove = (updateTodo) => ({ type: "todo/remove", payload: updateTodo });

    const handleUpdate = (updateTodo) => {
        dispatch(update({...updateTodo}));
    }
    const handleIsFavorite = (updateTodo) => {
        dispatch(isFavorite({...updateTodo}));
    }
    const handleRemove = (updateTodo) => {
        dispatch(remove({...updateTodo}));
    }
    const hangleIsCompleted = (updateTodo) => {
        dispatch(isCompleted({...updateTodo}));
    }

    return (
        <div className="flex justify-center flex-wrap mt-5">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate} onIsFavorite={handleIsFavorite} onRemove={handleRemove} onCompleted={hangleIsCompleted}/>
            ))}
        </div>
    );
}

export default TodoListBlock;