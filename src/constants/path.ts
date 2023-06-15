import React from 'react';
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage';
import { ProjectInfoPage } from '../pages/ProjectInfoPage/ProjectInfoPage';

export enum EPath {
  MAIN_PAGE = '/',
  INFO_PAGE = '/project/:id',
}

type TPath = {
  path: string;
  element: () => React.ReactElement;
};

export const routes: TPath[] = [
  {
    path: EPath.MAIN_PAGE,
    element: ProjectsPage,
  },
  {
    path: EPath.INFO_PAGE,
    element: ProjectInfoPage,
  },
];
