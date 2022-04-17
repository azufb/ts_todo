import Form from "./components/form";
import ToDos from './components/todos';
import DoneToDos from "./components/doneTodos";
import Achievement from "./components/achievement";
import DeleteAllBtn from "./components/deleteAllBtn";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const App = () => {
    return (
        <>
            <Header />
            <Form />
            <DeleteAllBtn />
            <ToDos />
            <DoneToDos />
            <Achievement />
            <Footer />
        </>
    )
}