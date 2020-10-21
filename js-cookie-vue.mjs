// inspired by cmp-cc/vue-cookies
//

'use strict'
import Cookies from 'js-cookie'

export default {
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
