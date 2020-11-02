// inspired by cmp-cc/vue-cookies
//

'use strict'
import Cookies from 'js-cookie'

function setOptions(/** @type {Cookies.CookieAttributes} */options) {
  if (Cookies.withAttributes) Cookies.withAttributes(options)
  else Cookies.defaults = options
  return Cookies.defaults;
}

const JSCookieVue = {
  install: function (Vue, options) {
    if (options) {
      setOptions(options)
    }
    Vue.$cookies = this;
    Vue.prototype.$cookies = this;
  },
  config: setOptions,
  ...Cookies
}
export default JSCookieVue
