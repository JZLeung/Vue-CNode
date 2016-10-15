import Vue from 'vue';
import App from './app.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import Filters from './util/filter.js';

Vue.use(VueResource);
Vue.use(VueRouter);

// console.log(Filters);

for (var filter in Filters) {
	if (Filters.hasOwnProperty(filter)) {
		Vue.filter(filter, Filters[filter]);
	}
}

import Home from './pages/home.vue';
// import Topic from './pages/detail.vue';
Vue.config.debug = true;//开启错误提示
var router = new VueRouter()
router.map({
	'/home': {
		name: 'home',
		component: Home,
		// subRoutes:{
		// 	'/subrouter': {
		// 		component: SubRouter
		// 	}
		// }
	},
	// '/topic/:id': {
	// 	name: 'topic',
	// 	component: Topic
	// }
})

router.redirect({
	'*': '/home',
	'/': '/home'
})


router.start(App, '#app')
