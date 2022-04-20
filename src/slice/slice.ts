import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// initialStateの型定義
/*
    interfaceは、オブジェクトやクラスの型を定義することができる。
    プロパティの型だけでなく、メソッドの型も定義できる。
*/
interface todoItem {
    todos: {
        id: number;
        title: string;
        status: boolean;
    }[] | [],
    doneTodos: {
        id: string;
        title: string;
        status: boolean;
    }[] | [],
    achievement: number;
}

// initialStateを定義
const initialState: todoItem = {
    todos: [],
    doneTodos: [],
    achievement: 0
}

// sliceの定義(ActionType, ActionCreator, Reducerをまとめて定義することができる)
// reducerは、元のstateを使って処理をし、新しいstateを返す。
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            let id;
            if (state.todos.length === 0) {
                id = 0;
            } else {
                id = state.todos[state.todos.length - 1].id + 1;
            }

            state.todos = [...state.todos, {id: id, title: action.payload, status: false}];
        },
        changeStatus: (state, action) => {
            const clickedToDo = state.todos.find(todo => todo.id === action.payload);

            if (clickedToDo) {
                clickedToDo.status = !clickedToDo.status;

                let id;
                if (state.doneTodos.length === 0) {
                    id = 0;
                } else {
                    id = state.doneTodos[state.doneTodos.length - 1].id + 1;
                }
                
                state.doneTodos = [...state.doneTodos, {id: `done-${id}`, title: clickedToDo.title, status: clickedToDo.status}];
            }
        },
        backStatus: (state, action) => {
            const clickedDoneToDo = state.doneTodos.find(done => done.id === action.payload);

            if (clickedDoneToDo) {
                clickedDoneToDo.status = false;

                let id;
                if (state.todos.length === 0) {
                    id = 0;
                } else {
                    id = state.todos[state.todos.length - 1].id + 1;
                }

                state.todos = [...state.todos, {id: id, title: clickedDoneToDo.title, status: clickedDoneToDo.status}];
            }
        },
        deleteToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        deleteDoneToDo: (state, action) => {
            state.doneTodos = state.doneTodos.filter((done) => done.id !== action.payload);
        },
        deleteAllToDo: (state) => {
            state.todos = [];
            state.doneTodos = [];
            state.achievement = 0;
        },
        calculateAchievement: (state) => {
            state.achievement = Math.round(state.doneTodos.length / (state.todos.length + state.doneTodos.length) * 100);
            if (isNaN(state.achievement)) {
                state.achievement = 0;
            }
        }
    }
})

export const { addToDo, changeStatus, backStatus, deleteToDo, deleteDoneToDo, deleteAllToDo, calculateAchievement } = todoSlice.actions;
export const selectTodos = (state: RootState) => 
  state.todo.todos
export default todoSlice.reducer;