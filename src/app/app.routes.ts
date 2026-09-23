import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Services } from './services/services';
import { Blog } from './blog/blog';
import { BlogPost } from './blog-post/blog-post';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:slug',
    component: BlogPost,
  },
];
