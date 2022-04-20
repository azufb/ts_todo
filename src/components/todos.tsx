import { useDispatch, useSelector } from "react-redux";
import { calculateAchievement, changeStatus, deleteToDo } from "../slice/slice";
import { RootState } from '../store/store';
import { DeleteAllBtn } from "./DeleteAllBtn";
import { sprinkles } from "../styles/sprinkles.css";
import { doneBtnStyle } from "../styles/toDos.css";

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
        <div className={sprinkles({width: '50%'})}>
            <h1 className={sprinkles({textAlign: 'center'})}>タスク一覧</h1>
            <DeleteAllBtn />
            <ul>
                {todo.map((item) => {
                return ( 
                    <li key={item.id}>{item.title}
                        <button onClick={() => handleChangeStatus(item.id)} className={doneBtnStyle}>完了する</button>
                        <button onClick={() => handleDeleteToDo(item.id)}>削除</button>
                    </li>
                )
                })}
            </ul>
        </div>
    )
}