const Menu = [
  {header: 'Apps'},
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Chat',
    group: 'apps',
    icon: 'chat_bubble',
    target: '_blank',
    name: 'Chat',
    href: '/chat/messaging'
  },
  {
    title: 'Inbox',
    group: 'apps',
    name: 'Mail',
    target: '_blank',
    icon: 'email',
    href: '/mail/all'
  },
  {
    title: 'Media',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Widgets',
    group: 'widgets',
    component: 'widgets',
    icon: 'widgets',
    items: [
      {name: 'social', title: 'Social', href: '/widgets/social'},
      {name: 'statistic', title: 'Statistic', badge: 'new', href: '/widgets/statistic'},
      {name: 'chart', title: 'Chart', href: '/widgets/chart'},
      {name: 'list', title: 'List', href: '/widgets/list'},
    ]
  },
  {
    title: 'Queue',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Social Accounts',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Timetable',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Drafts',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Bulk CSV Upload',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Upgrade',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Help',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Settings',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Getting Started',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
  {
    title: 'Sign Out',
    group: 'apps',
    name: 'Media',
    icon: 'perm_media',
    href: '/media'
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
