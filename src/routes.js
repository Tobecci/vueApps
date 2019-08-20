import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import addBlog from './components/addBlog.vue';

export default [
  {path:"/",component:showBlogs},
  {path:"/list",component:listBlogs},
  {path:"/blog/:id",component:singleBlog},
  {path:"/add",component:addBlog},
]
