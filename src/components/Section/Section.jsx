import { useEffect, useState } from "react";
import styles from "./Section.module.css";

// Section component used for all the news categories

const Section = (props) => {
    const [posts, setPosts] = useState([]);
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    useEffect(() => {
        fetch(`https://content.guardianapis.com/${props.sectionType}?api-key=${API_KEY}&show-fields=thumbnail`)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setPosts(data.response.results);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
        <div className={styles.news}>
            {posts.map((post) => {
                return (
                    <article className={styles.newsArticle} key={post.id}>
                        <h2 className={styles.newsTitle}>{post.webTitle}</h2>
                        <img src={post.fields.thumbnail} alt={post.webTitle} className={styles.newsImage} />
                    </article>
                );
            })}
        </div>
    );
};

export default Section;