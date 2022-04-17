import { useDispatch, useSelector } from "react-redux";
import { calculateAchievement, changeStatus, deleteToDo } from "../slice/slice";
import { RootState } from '../store/store';

export const ToDos = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.todo.todos);

    const handleChangeStatus = (param: number) => {
        dispatch(changeStatus(param));
        dispatch(deleteToDo(param));
        dispatch(calculateAchievement());
    }

    const handleDeleteToDo = (param: number) => {
        dispatch(deleteToDo(param));
        dispatch(calculateAchievement());
    }

    return (
        <div>
            <h1>タスク一覧</h1>
            <ul>
                {todo.map((item) => {
                return ( 
                    <li key={item.id}>{item.title}
                        {!item.status ? <button onClick={() => handleChangeStatus(item.id)}>未完了</button> : <button>完了</button>}
                        <button onClick={() => handleDeleteToDo(item.id)}>削除</button>
                    </li>
                )
                })}
            </ul>
        </div>
    )
}