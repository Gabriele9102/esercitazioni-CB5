import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Main } from './../../components/main/Main';

export function Container () {

    return <div className="layout">
        <Header />

        <Main />

        <Footer />
    </div>


}