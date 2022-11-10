import { useEffect, useState } from "react";
import styles from "./MainPage.module.css"

const MainPage = () => {
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    const [books, setBooks] = useState([]);
    const [sports, setSports] = useState([]);
    const [culture, setCulture] = useState([]);
    const [business, setBusiness] = useState([]);

    const sectionsUrl = [
        `https://content.guardianapis.com/books?api-key=${API_KEY}&show-fields=thumbnail`,
        `https://content.guardianapis.com/sport?api-key=${API_KEY}&show-fields=thumbnail`,
        `https://content.guardianapis.com/culture?api-key=${API_KEY}&show-fields=thumbnail`,
        `https://content.guardianapis.com/business?api-key=${API_KEY}&show-fields=thumbnail`
    ];

    useEffect(() => {
        Promise.all(
            sectionsUrl.map(sectionUrl => fetch(sectionUrl).then(response => response.json()))
        ).then((data) => {
            setBooks(data[0].response.results.slice(0, 3));
            setSports(data[1].response.results.slice(0, 3));
            setCulture(data[2].response.results.slice(0, 3));
            setBusiness(data[3].response.results.slice(0, 3));
        })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Books</h2>
                <div className={styles.sectionContainer}>
                    {books.map((book) => {
                        return (
                            <section className={styles.section} key={book.id}>
                                <article className={styles.firstArticle}>
                                    <h3>{book.webTitle}</h3>
                                    <img src={book.fields.thumbnail} alt={book.webTitle} className={styles.articleImg} />
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Sports</h2>
                <div className={styles.sectionContainer}>
                    {sports.map((sport) => {
                        return (
                            <section className={styles.section} key={sport.id}>
                                <article className={styles.firstArticle}>
                                    <h3 >{sport.webTitle}</h3>
                                    <img src={sport.fields.thumbnail} alt={sport.webTitle} className={styles.articleImg} />
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Culture</h2>
                <div className={styles.sectionContainer}>
                    {culture.map((cult) => {
                        return (
                            <section className={styles.section} key={cult.id}>
                                <article className={styles.firstArticle}>
                                    <h3>{cult.webTitle}</h3>
                                    <img src={cult.fields.thumbnail} alt={cult.webTitle} className={styles.articleImg} />
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Business</h2>
                <div className={styles.sectionContainer}>
                    {business.map((bus) => {
                        return (
                            <section className={styles.section} key={bus.id}>
                                <article className={styles.firstArticle}>
                                    <h3>{bus.webTitle}</h3>
                                    <img src={bus.fields.thumbnail} alt={bus.webTitle} className={styles.articleImg} />
                                </article>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainPage;