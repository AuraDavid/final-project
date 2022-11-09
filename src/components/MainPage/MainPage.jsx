import styles from "./MainPage.module.css"

const MainPage = () => {
   
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>sectiune</h1>
                <section className={styles.section}>
                    <article className={styles.firstArticle}>Articol 1</article>
                    <article className={styles.secondArticle}>Articol 2</article>
                    <article className={styles.thirdArticle}>Articol 3</article>
                </section>
            </div>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>sectiune</h1>
                <section className={styles.section}>
                    <article className={styles.firstArticle}>Articol 1</article>
                    <article className={styles.secondArticle}>Articol 2</article>
                    <article className={styles.thirdArticle}>Articol 3</article>
                </section>
            </div>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>sectiune</h1>
                <section className={styles.section}>
                    <article className={styles.firstArticle}>Articol 1</article>
                    <article className={styles.secondArticle}>Articol 2</article>
                    <article className={styles.thirdArticle}>Articol 3</article>
                </section>
            </div>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>sectiune</h1>
                <section className={styles.section}>
                    <article className={styles.firstArticle}>Articol 1</article>
                    <article className={styles.secondArticle}>Articol 2</article>
                    <article className={styles.thirdArticle}>Articol 3</article>
                </section>
            </div>
        </div>
    )
};

export default MainPage;