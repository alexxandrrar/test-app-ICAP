import { ProjectsCarousel } from '../../components/ProjectsCarousel/ProjectsCarousel';
import styles from './ProjectsPage.module.scss';

export const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our projects</h1>
      <div className={styles.carousel}>
        <ProjectsCarousel />
      </div>
      <h3 className={styles.text}>
        Opportunities don't happen, you create them.
      </h3>
      <h4 className={styles.author}>— CHRIS GROSSER</h4>
    </div>
  );
};
