import { useEffect, useState } from "react";
import styles from "./Section.module.css";

// Section component used for all the news categories

const Section = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://content.guardianapis.com/${props.sectionType}?api-key=df4b1ba2-2297-4a6f-a313-1c9b5c8190f6&show-fields=thumbnail`)
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