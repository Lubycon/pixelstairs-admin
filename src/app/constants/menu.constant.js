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
        link: 'common.default.maind'
    },{
        name: 'Authentication',
        link: 'common.default.maind'
    }]
},{
    name: 'Contents',
    open: false,
    icon: 'xi-library-image',
    submenu: [{
        name: 'Search',
        link: 'common.default.maind'
    },{
        name: 'Detail',
        link: 'common.default.maind'
    }]
},{
    name: 'Finance',
    open: false,
    icon: 'xi-bank',
    submenu: [{
        name: 'Donate',
        link: 'common.default.maind'
    }]
},{
    name: 'Analytics',
    open: false,
    icon: 'xi-presentation',
    submenu: [{
        name: 'Timeline',
        link: 'common.default.maind'
    },{
        name: 'Java',
        link: 'common.default.maind'
    }]
}];
