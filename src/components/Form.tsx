import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToDo, calculateAchievement } from "../slice/slice";
import { formStyle, submitBtn } from "../styles/form.css";

interface inputForm {
    task: String
}

export const Form = () => {
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
        <form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
            <input { ...register("task")} />
            <input type="submit" className={submitBtn} />
        </form>
    );
}