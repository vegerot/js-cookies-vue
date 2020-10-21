// inspired by cmp-cc/vue-cookies
//

import Cookies from 'js-cookie'

export default JsCookiesVue = {
  install: function (Vue, options) {
    if (options) {
      Cookies.withAttributes(options)
    }
    Vue.$cookies = this;
    Vue.prototype.$cookies = this;
  },
  config: Cookies.withAttributes,
  ...Cookies
}
