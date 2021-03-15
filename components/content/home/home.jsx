import { TEXT_1, TEXT_2, TITLE } from "./constants";

export const Home = () => {
    return (
        <section className="grid home">
            <h2 className="text-end home__title">{TITLE}</h2>
            <p className="text-end home__text">{TEXT_1}</p>
            <p className="text-end home__text">{TEXT_2}</p>
        </section>
    );
}