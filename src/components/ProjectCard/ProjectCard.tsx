import { FC } from 'react';
import styles from './ProjectCard.module.scss';

interface IProjectCardProps {
  imageUrl: string;
  name: string;
  text: string;
  projectUrl?: string;
}

export const ProjectCard: FC<IProjectCardProps> = ({
  imageUrl,
  name,
  text,
  projectUrl,
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <img width='250px' src={imageUrl} alt='project' />
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.readmore}>
        <span>READ MORE</span>
      </div>
    </div>
  );
};
