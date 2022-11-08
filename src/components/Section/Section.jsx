import styles from "./Section.module.css";

// Section component used for all the news categories

const Section = (props) => {
    return (
        <div className={styles.news}>
            <article className={styles.newsArticle}>
                <h1>{props.sectionType}</h1>
                <div className={styles.newsTitle}></div>
                <div className={styles.newsAuthor}></div>
                <div className={styles.newsDescription}></div>
                <img src="" alt="" className={styles.newsimage}/>
            </article>
            <article className={styles.newsArticle}>
                <h1>{props.sectionType}</h1>
                <div className={styles.newsTitle}></div>
                <div className={styles.newsAuthor}></div>
                <div className={styles.newsDescription}></div>
                <img src="" alt="" className={styles.newsimage}/>
            </article>
        </div>
    );
};

export default Section;