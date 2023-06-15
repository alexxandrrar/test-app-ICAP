import { FC } from 'react';
import styles from './ProjectCard.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProjectCardProps {
  id: string;
  imageUrl: string;
  name: string;
  text: string;
}

export const ProjectCard: FC<IProjectCardProps> = ({
  id,
  imageUrl,
  name,
  text,
}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div id={id} className={styles.card}>
      <div className={styles.container}>
        <img width='250px' src={imageUrl} alt='project' />
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.readmore}>
        <span onClick={() => navigate(`/project/${id}`)}>READ MORE</span>
      </div>
    </div>
  );
};
