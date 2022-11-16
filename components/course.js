import styles from "../styles/course/course.module.css";

export default function Course({ course }) {

    const {title, content, image} = course.attributes;

    return (
        <section className={`${styles.course} course`}>
          <style jsx="true">
                {
                    `
                .course{
                    background-image: linear-gradient(to right, rgb(0 0 0 /.65), rgb(0 0 0 /.7)), url(${image.data.attributes.url})
                }
                `
                }
            </style>
            <div className={`${styles.course__content} container`}>
                <div className={styles.course__texts}>
                    <h2 className={styles.course__heading}>{title}</h2>
                    <p className={styles.course__paragraph}>
                        {content}
                    </p>
                </div>
            </div>
        </section>
    )
}
