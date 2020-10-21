// inspired by vue-cookies
import _Vue from 'vue';

import type { CookiesStatic, CookieAttributes } from 'js-cookie'

export declare function install(Vue: typeof _Vue, config: CookieAttributes): void;

export interface VueCookies extends CookiesStatic {
  /**
   * Set global config
   */
  config(options: CookieAttributes): void;

}

declare const _default : {
  VueCookies: VueCookies;
  install: typeof install;
};

export default _default;
