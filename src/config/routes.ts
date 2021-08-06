import IRoute from '../interfaces/route';
import AboutPage from '../pages/about/about';
import HomePage from '../pages/home/home';
import AppsPage from '../pages/apps/apps';
import PortfolioPage from '../pages/portfolio/portfolio';
import ContactPage from '../pages/contact/contact';
import BlogPage from '../pages/blog/blog';
import ResumePage from '../pages/resume/resume';

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: true
  },
  {
    path: '/about',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: '/about/:number',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: '/apps',
    name: 'Apps Page',
    component: AppsPage,
    exact: true
  },
  {
    path: '/portfolio',
    name: 'Portfolio Page',
    component: PortfolioPage,
    exact: true
  },
  {
    path: '/contact',
    name: 'Contact Page',
    component: ContactPage,
    exact: true
  },
  {
    path: '/blog',
    name: 'Blog Page',
    component: BlogPage,
    exact: true
  },
  {
    path: '/resume',
    name: 'Resume Page',
    component: ResumePage,
    exact: true
  }
];

export default routes;
