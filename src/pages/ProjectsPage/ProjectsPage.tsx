import styles from './ProjectsPage.module.scss';

export const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our projects</h1>
      <div className={styles.carousel}></div>
      <h3>Opportunities don't happen, you create them.</h3>
      <h4>— Chris Grosser</h4>
    </div>
  );
};
