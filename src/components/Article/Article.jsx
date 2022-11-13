import { useEffect, useState } from "react";
import styles from "./Article.module.css"
import { useLocation } from 'react-router-dom'
import { useLoaderData } from "react-router-dom";

const Article = (props) => {
    const location = useLocation();
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const [article, setArticle] = useState([]);

    const test = useLoaderData();

    useEffect(() => {
        fetch(`${location.state.apiUrl}?api-key=${API_KEY}&show-fields=headline,body`)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data.response.content.fields);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className={styles.articleContainer}>
            <div key={article.id}>
                <h1 className={styles.articleTitle}>{article.headline}</h1>
                <div className={styles.articleBody} dangerouslySetInnerHTML={{__html: article.body}}></div>
            </div>
        </div>
    );
};

export default Article;