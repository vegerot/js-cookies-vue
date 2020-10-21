// inspired by vue-cookies
import _Vue from 'vue';

import type { CookiesStatic, CookieAttributes } from 'js-cookie'

export declare function install(Vue: typeof _Vue, config: CookieAttributes): void;

export interface JsCookieVue extends CookiesStatic {
  /**
   * Set global config
   */
  config(options: CookieAttributes): void;

}

declare const _default : {
  JsCookieVue: JsCookieVue;
  install: typeof install;
};

export default _default;
