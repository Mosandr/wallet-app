import { lazy } from 'react';

const LoginView = lazy(() => import('./view/LoginView/LoginView'));
const RegisterView = lazy(() => import('./view/RegisterView/RegisterView'));
const DashboardView = lazy(() => import('./view/DashboardView/DashboardView'));

export const routes = [
  {
    isPublic: true,
    path: '/login',
    redirectTo: '/',
    exact: true,
    restricted: true,
    component: LoginView,
    label: 'LoginView',
  },
  {
    isPublic: true,
    path: '/register',
    redirectTo: '/login',
    exact: true,
    restricted: true,
    component: RegisterView,
    label: 'RegisterView',
  },
  {
    isPublic: false,
    path: '/',
    redirectTo: '/login',
    exact: false,
    restricted: false,
    component: DashboardView,
    label: 'DashboardView',
  },
];
