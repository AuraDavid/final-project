import { Link } from "react-router-dom";
import styles from "./Section.module.css";
import useFetchSectionData from "../../services/NewsService";

// Section component used for all the news categories

const Section = (props) => {
    const posts = useFetchSectionData(props.sectionType);

    return (
        <div className={styles.news}>
            {posts.map((post) => {
                return (
                    <article className={styles.newsArticle} key={post.id}>
                        <h2>
                            <Link to={"/Article"} state={{ apiUrl: post.apiUrl }} className={styles.newsTitle}>{post.webTitle}</Link>
                        </h2>
                        <img src={post.fields.thumbnail} alt={post.webTitle} className={styles.newsImage} />
                    </article>
                );
            })}
        </div>
    );
};

export default Section;