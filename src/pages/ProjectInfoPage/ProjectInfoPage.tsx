import { useParams } from 'react-router-dom';
import { projects } from '../../constants/project';
import styles from './ProjectInfoPage.module.scss';

export const ProjectInfoPage = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      {projects
        .filter((item) => item.id === id)
        .map((item) => (
          <div>
            <h1 className={styles.name}>{item.name}</h1>
            <hr className={styles.line} />
            <p className={styles.text}>{item.editionalText}</p>
          </div>
        ))}
    </div>
  );
};
