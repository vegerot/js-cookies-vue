// inspired by vue-cookies
import originalVue from 'vue';
import './vue'

import type { CookiesStatic, CookieAttributes } from 'js-cookie'

export declare function install(Vue: typeof originalVue, options?: CookieAttributes): void;

export interface JsCookieVue extends CookiesStatic {
  /**
   * Set global config
   */
  config(options: CookieAttributes): void;
  install: typeof install;

}

declare const _default: JsCookieVue;

export default _default;
