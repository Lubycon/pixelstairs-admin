export const APP_GLOBAL_MENU = [{
    name: 'Home',
    open: false,
    icon: 'xi-home',
    link: 'common.default.main'
},{
    name: 'Users',
    open: false,
    icon: 'xi-users',
    submenu: [{
        name: 'Search',
        link: 'common.default.users'
    },{
        name: 'Employees',
        link: 'common.default.users1'
    },{
        name: 'Blacklist',
        link: 'common.default.users-black'
    }]
},{
    name: 'Contents',
    open: false,
    icon: 'xi-library-image',
    submenu: [{
        name: 'Search',
        link: 'common.default.contents'
    }]
},{
    name: 'Instagram',
    open: false,
    icon: 'xi-instagram',
    submenu: [{
        name: 'Followers',
        link: 'common.default.insta-follow'
    },{
        name: 'Unfollow',
        link: 'common.default.maind'
    }]
}];

export const APP_HEADER_MENU = [{
    icon: 'xi-presentation',
    name: 'Dashboard',
    link: 'common.default.main'
},{
    icon: 'xi-branch',
    name: '[Test] Branch',
    link: 'common.default.main'
},{
    icon: 'xi-pull-requests',
    name: '[Test] Pull Request',
    link: 'common.default.main'
},{
    icon: 'xi-merge',
    name: '[Test] Merge',
    link: 'common.default.main'
}];

export const APP_USER_MENU = [
    // {
    //     icon: 'xi-presentation',
    //     name: 'Dashboard',
    //     link: 'common.default.main'
    // }
];
