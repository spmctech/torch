import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import index from '@/components/index'
import pageList from '@/components/pages/list'
import pageEdit from '@/components/pages/edit'

import configList from '@/components/config/list'



Vue.use(Router)
Vue.use(iView);
Vue.use(mavonEditor);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/pages/list',
      name: '文章列表',
      component: pageList
    },
    {
      path: '/pages/edit',
      name: '文章编辑',
      component: pageEdit
    },
    {
      path: '/config/list',
      name: '系统设置',
      component: configList
    }
  ]
})
