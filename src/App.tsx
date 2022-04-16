import Form from "./components/form";
import ToDos from './components/todos';
import DoneToDos from "./components/doneTodos";
import Achievement from "./components/achievement";
import DeleteAllBtn from "./components/deleteAllBtn";

export const App = () => {
    return (
        <>
            <Form />
            <DeleteAllBtn />
            <ToDos />
            <DoneToDos />
            <Achievement />
        </>
    )
}