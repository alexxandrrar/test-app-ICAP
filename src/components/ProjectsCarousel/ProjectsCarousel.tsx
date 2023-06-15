import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projects } from '../../constants/project';
import Slider from 'react-slick';

import styles from './ProjectsCarousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        {projects.map(({ id, imageUrl, name, text }) => (
          <div key={id}>
            <ProjectCard id={id} imageUrl={imageUrl} name={name} text={text} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
