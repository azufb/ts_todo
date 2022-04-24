import { useDispatch, useSelector } from "react-redux";
import { backStatus, calculateAchievement, deleteDoneToDo } from "../slice/slice";
import { RootState } from '../store/store';
import { sprinkles } from "../styles/sprinkles.css";
import { doneToDoStyle, doneStarStyle, doneToDoTextStyle, backBtnStyle } from "../styles/doneToDos.css";

export const DoneToDos = () => {
    const dispatch = useDispatch();
    const doneTodos = useSelector((state: RootState) => state.todo.doneTodos);
    
    const handleBackStatus = (param: string) => {
        dispatch(backStatus(param));
        dispatch(deleteDoneToDo(param));
        dispatch(calculateAchievement());
    }

    return (
        <div className={sprinkles({width: '50%'})}>
            <h1 className={sprinkles({textAlign: 'center'})}>Done!</h1>
            <div>
                {doneTodos.map((item) => {
                    return (
                        <div key={item.id} className={doneToDoStyle}>
                            <span className={doneStarStyle}>★</span>
                            <p className={doneToDoTextStyle}>{item.title}</p>
                            <button onClick={() => handleBackStatus(item.id)} className={backBtnStyle}>戻す</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}