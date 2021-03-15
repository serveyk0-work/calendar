import { Fragment } from 'react'
import { TITLE, TEXT1, TEXT2 } from "./constants";0
export const AboutUs = () => {
    return (
        <section className="about">
            <h2 className="about__title">{TITLE}</h2>
            {
                TEXT1.map((item, index) =>
                    <p className="about__text" key={index}>
                        {item}
                    </p>
                )
            }
            <p className="about__text">
                {
                    TEXT2.map((item, index) =>
                        <Fragment key={index}><span>{item}</span><br /></Fragment>
                    )
                }
            </p>
        </section>
    );
}