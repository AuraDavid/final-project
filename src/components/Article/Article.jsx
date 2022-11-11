import { useEffect, useState } from "react";
import styles from "./Article.module.css"
import { useLocation } from 'react-router-dom'


const Article = (props) => {
    const location = useLocation();
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch(`${location.state.apiUrl}?api-key=${API_KEY}&show-fields=thumbnail`)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data.response.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className={styles.articleContainer}>
            {article.map((art) => {
                return (
                    <div key={art.id}>
                        <h1 className={styles.articleTitle}>{art.webTitle}</h1>
                        <img src={art.fields.thumbnail} alt={post.webTitle} />
                        <p className={styles.articleTime}>{art.webPublicationDate}</p>
                        <div className={styles.mainArticle}>{art.webUrl}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Article;