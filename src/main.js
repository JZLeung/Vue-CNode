import Vue from 'vue';
import App from './app';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

import Home from './pages/home';
import Topic from './pages/detail';

router.map({
	'/home/:type': {
		name: 'home',
		component: Home,
		// subRoutes:{
		// 	'/subrouter': {
		// 		component: SubRouter
		// 	}
		// }
	},
	'/topic/:id': {
		name: 'topic',
		component: Topic
	}
})

router.redirect({
	'*': '/home/all'
})


router.start(App, '#app')


// var routeMap = [
//     {
//         path: '/',
//         component: Home
//     }
// ];
//
// var router = new VueRouter(routeMap);
//
// const app = new Vue({
//     router
// }).$mount('#app')
