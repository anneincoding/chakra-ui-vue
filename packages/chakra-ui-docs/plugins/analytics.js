import Vue from 'vue'
import VueMultianalytics from 'vue-multianalytics/dist/vue-multianalytics'

let mixpanelConfig = {
  token: process.env.MIXPANEL_TOKEN
}

export default ({ app, router }) => {
  Vue.use(VueMultianalytics, {
    modules: {
      mixpanel: mixpanelConfig
    },
    routing: {
      vueRouter: router,
      preferredProperty: 'name',
      ignoredViews: ['Home'],
      ignoredModules: ['ga']
    }
  })
}