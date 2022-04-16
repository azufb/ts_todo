import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToDo, calculateAchievement } from "../slice/slice";
import { vanillaApp } from "../styles/styles.css";

interface inputForm {
    task: String
}

function Form() {
    const dispatch = useDispatch();
    // isSubmitSuccessfulは、フォームの送信に成功したか否かを判定するboolean値。
    const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm<inputForm>();
    const onSubmit: SubmitHandler<inputForm> = (data) => {
        dispatch(addToDo(data.task));
        dispatch(calculateAchievement());
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ task: '' });
          }
    }, [isSubmitSuccessful, reset])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className={vanillaApp}>Task：</label>
            <input { ...register("task")} />
            <input type="submit" />
        </form>
    );
}

export default Form;