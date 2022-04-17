import { Form } from './components/Form';
import { ToDos } from './components/Todos';
import { DoneToDos } from "./components/DoneToDos";
import { Achievement } from "./components/Achievement";
import { DeleteAllBtn } from "./components/DeleteAllBtn";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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