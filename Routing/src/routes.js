// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

// this syntax is part of webpack
// this is called "lazy load" which only loads parts of the app as needed
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue')); //Require can be used the same as imports up top
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue')); //Require can be used the same as imports up top
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue')); //Require can be used the same as imports up top
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue')); //Require can be used the same as imports up top
    }, 'user');
};

export const routes = [ 
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ]},
    { path: '/redirect-me', redirect: { name: 'home' }},
    { path: '*', redirect: '/'}
    // using star will catch anything that isn't covered by another redirect
];