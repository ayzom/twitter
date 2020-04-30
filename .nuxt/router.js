import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a8bdd28 = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages_chat" */))
const _4a77d0e6 = () => interopDefault(import('..\\pages\\chat\\contact\\_uuid.vue' /* webpackChunkName: "pages_chat_contact__uuid" */))
const _500c8282 = () => interopDefault(import('..\\pages\\chat\\messaging\\_uuid.vue' /* webpackChunkName: "pages_chat_messaging__uuid" */))
const _62074930 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages_dashboard" */))
const _ac16fd2e = () => interopDefault(import('..\\pages\\empty.vue' /* webpackChunkName: "pages_empty" */))
const _6b81474b = () => interopDefault(import('..\\pages\\forms.vue' /* webpackChunkName: "pages_forms" */))
const _5ee4cf15 = () => interopDefault(import('..\\pages\\forms\\basic-forms.vue' /* webpackChunkName: "pages_forms_basic-forms" */))
const _514fc56b = () => interopDefault(import('..\\pages\\forms\\editors.vue' /* webpackChunkName: "pages_forms_editors" */))
const _18f424bc = () => interopDefault(import('..\\pages\\forms\\selection-controls.vue' /* webpackChunkName: "pages_forms_selection-controls" */))
const _cd54d988 = () => interopDefault(import('..\\pages\\forms\\selects.vue' /* webpackChunkName: "pages_forms_selects" */))
const _2a9a91cd = () => interopDefault(import('..\\pages\\forms\\steppers.vue' /* webpackChunkName: "pages_forms_steppers" */))
const _db509fc4 = () => interopDefault(import('..\\pages\\forms\\text-fields.vue' /* webpackChunkName: "pages_forms_text-fields" */))
const _2babce84 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages_general" */))
const _66d54d1b = () => interopDefault(import('..\\pages\\general\\alerts.vue' /* webpackChunkName: "pages_general_alerts" */))
const _db787c34 = () => interopDefault(import('..\\pages\\general\\avatars.vue' /* webpackChunkName: "pages_general_avatars" */))
const _34cf8f34 = () => interopDefault(import('..\\pages\\general\\badges.vue' /* webpackChunkName: "pages_general_badges" */))
const _11b71bad = () => interopDefault(import('..\\pages\\general\\buttons.vue' /* webpackChunkName: "pages_general_buttons" */))
const _550ff78f = () => interopDefault(import('..\\pages\\general\\cards.vue' /* webpackChunkName: "pages_general_cards" */))
const _28984d82 = () => interopDefault(import('..\\pages\\general\\carousels.vue' /* webpackChunkName: "pages_general_carousels" */))
const _649a43d3 = () => interopDefault(import('..\\pages\\general\\chips.vue' /* webpackChunkName: "pages_general_chips" */))
const _41415374 = () => interopDefault(import('..\\pages\\general\\colors.vue' /* webpackChunkName: "pages_general_colors" */))
const _7bffa357 = () => interopDefault(import('..\\pages\\general\\dialogs.vue' /* webpackChunkName: "pages_general_dialogs" */))
const _10caafc6 = () => interopDefault(import('..\\pages\\general\\icons.vue' /* webpackChunkName: "pages_general_icons" */))
const _eb69dac4 = () => interopDefault(import('..\\pages\\general\\pagination.vue' /* webpackChunkName: "pages_general_pagination" */))
const _49292d1b = () => interopDefault(import('..\\pages\\general\\parallax.vue' /* webpackChunkName: "pages_general_parallax" */))
const _36f8f29e = () => interopDefault(import('..\\pages\\general\\progress.vue' /* webpackChunkName: "pages_general_progress" */))
const _77237f5e = () => interopDefault(import('..\\pages\\general\\sliders.vue' /* webpackChunkName: "pages_general_sliders" */))
const _664f8189 = () => interopDefault(import('..\\pages\\general\\snackbar.vue' /* webpackChunkName: "pages_general_snackbar" */))
const _ca935c2e = () => interopDefault(import('..\\pages\\general\\tables.vue' /* webpackChunkName: "pages_general_tables" */))
const _6fa22858 = () => interopDefault(import('..\\pages\\general\\tooltips.vue' /* webpackChunkName: "pages_general_tooltips" */))
const _0c6d7db3 = () => interopDefault(import('..\\pages\\general\\typography.vue' /* webpackChunkName: "pages_general_typography" */))
const _cfc504f6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _b71f876a = () => interopDefault(import('..\\pages\\mail.vue' /* webpackChunkName: "pages_mail" */))
const _4ea679f5 = () => interopDefault(import('..\\pages\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages_mail_0__uuid" */))
const _11ae5e75 = () => interopDefault(import('..\\pages\\mail\\_mailType.vue' /* webpackChunkName: "pages_mail__mailType" */))
const _7e2c4880 = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages_media" */))
const _9233ae7e = () => interopDefault(import('..\\pages\\pickers.vue' /* webpackChunkName: "pages_pickers" */))
const _6bcade7d = () => interopDefault(import('..\\pages\\pickers\\datepicker.vue' /* webpackChunkName: "pages_pickers_datepicker" */))
const _7037b248 = () => interopDefault(import('..\\pages\\pickers\\timepicker.vue' /* webpackChunkName: "pages_pickers_timepicker" */))
const _213094c8 = () => interopDefault(import('..\\pages\\send.vue' /* webpackChunkName: "pages_send" */))
const _7d5f0e6a = () => interopDefault(import('..\\pages\\widgets.vue' /* webpackChunkName: "pages_widgets" */))
const _bc088b3a = () => interopDefault(import('..\\pages\\widgets\\chart.vue' /* webpackChunkName: "pages_widgets_chart" */))
const _314b83a9 = () => interopDefault(import('..\\pages\\widgets\\list.vue' /* webpackChunkName: "pages_widgets_list" */))
const _730e4b90 = () => interopDefault(import('..\\pages\\widgets\\social.vue' /* webpackChunkName: "pages_widgets_social" */))
const _82e5d756 = () => interopDefault(import('..\\pages\\widgets\\statistic.vue' /* webpackChunkName: "pages_widgets_statistic" */))
const _63144b24 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chat",
    component: _0a8bdd28,
    name: "chat",
    children: [{
      path: "contact/:uuid?",
      component: _4a77d0e6,
      name: "chat-contact-uuid"
    }, {
      path: "messaging/:uuid?",
      component: _500c8282,
      name: "chat-messaging-uuid"
    }]
  }, {
    path: "/dashboard",
    component: _62074930,
    name: "dashboard"
  }, {
    path: "/empty",
    component: _ac16fd2e,
    name: "empty"
  }, {
    path: "/forms",
    component: _6b81474b,
    name: "forms",
    children: [{
      path: "basic-forms",
      component: _5ee4cf15,
      name: "forms-basic-forms"
    }, {
      path: "editors",
      component: _514fc56b,
      name: "forms-editors"
    }, {
      path: "selection-controls",
      component: _18f424bc,
      name: "forms-selection-controls"
    }, {
      path: "selects",
      component: _cd54d988,
      name: "forms-selects"
    }, {
      path: "steppers",
      component: _2a9a91cd,
      name: "forms-steppers"
    }, {
      path: "text-fields",
      component: _db509fc4,
      name: "forms-text-fields"
    }]
  }, {
    path: "/general",
    component: _2babce84,
    name: "general",
    children: [{
      path: "alerts",
      component: _66d54d1b,
      name: "general-alerts"
    }, {
      path: "avatars",
      component: _db787c34,
      name: "general-avatars"
    }, {
      path: "badges",
      component: _34cf8f34,
      name: "general-badges"
    }, {
      path: "buttons",
      component: _11b71bad,
      name: "general-buttons"
    }, {
      path: "cards",
      component: _550ff78f,
      name: "general-cards"
    }, {
      path: "carousels",
      component: _28984d82,
      name: "general-carousels"
    }, {
      path: "chips",
      component: _649a43d3,
      name: "general-chips"
    }, {
      path: "colors",
      component: _41415374,
      name: "general-colors"
    }, {
      path: "dialogs",
      component: _7bffa357,
      name: "general-dialogs"
    }, {
      path: "icons",
      component: _10caafc6,
      name: "general-icons"
    }, {
      path: "pagination",
      component: _eb69dac4,
      name: "general-pagination"
    }, {
      path: "parallax",
      component: _49292d1b,
      name: "general-parallax"
    }, {
      path: "progress",
      component: _36f8f29e,
      name: "general-progress"
    }, {
      path: "sliders",
      component: _77237f5e,
      name: "general-sliders"
    }, {
      path: "snackbar",
      component: _664f8189,
      name: "general-snackbar"
    }, {
      path: "tables",
      component: _ca935c2e,
      name: "general-tables"
    }, {
      path: "tooltips",
      component: _6fa22858,
      name: "general-tooltips"
    }, {
      path: "typography",
      component: _0c6d7db3,
      name: "general-typography"
    }]
  }, {
    path: "/login",
    component: _cfc504f6,
    name: "login"
  }, {
    path: "/mail",
    component: _b71f876a,
    name: "mail",
    children: [{
      path: "0/:uuid?",
      component: _4ea679f5,
      name: "mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _11ae5e75,
      name: "mail-mailType"
    }]
  }, {
    path: "/media",
    component: _7e2c4880,
    name: "media"
  }, {
    path: "/pickers",
    component: _9233ae7e,
    name: "pickers",
    children: [{
      path: "datepicker",
      component: _6bcade7d,
      name: "pickers-datepicker"
    }, {
      path: "timepicker",
      component: _7037b248,
      name: "pickers-timepicker"
    }]
  }, {
    path: "/send",
    component: _213094c8,
    name: "send"
  }, {
    path: "/widgets",
    component: _7d5f0e6a,
    name: "widgets",
    children: [{
      path: "chart",
      component: _bc088b3a,
      name: "widgets-chart"
    }, {
      path: "list",
      component: _314b83a9,
      name: "widgets-list"
    }, {
      path: "social",
      component: _730e4b90,
      name: "widgets-social"
    }, {
      path: "statistic",
      component: _82e5d756,
      name: "widgets-statistic"
    }]
  }, {
    path: "/",
    component: _63144b24,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
