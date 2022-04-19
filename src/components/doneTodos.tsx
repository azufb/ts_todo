import { useDispatch, useSelector } from "react-redux";
import { backStatus, calculateAchievement, deleteDoneToDo } from "../slice/slice";
import { RootState } from '../store/store';
import { sprinkles } from "../styles/sprinkles.css";

export const DoneToDos = () => {
    const dispatch = useDispatch();
    const doneTodos = useSelector((state: RootState) => state.todo.doneTodos);
    
    const handleBackStatus = (param: number) => {
        dispatch(backStatus(param));
        dispatch(deleteDoneToDo(param));
        dispatch(calculateAchievement());
    }

    return (
        <div className={sprinkles({width: '50%'})}>
            <h1 className={sprinkles({textAlign: 'center'})}>Done!</h1>
            <ul>
                {doneTodos.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                            <button onClick={() => handleBackStatus(item.id)}>戻す</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}