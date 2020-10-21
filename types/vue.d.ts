import { JsCookieVue } from "./js-cookie-vue";


declare module "vue/types/vue" {
  interface Vue {
    $cookies: JsCookieVue;
  }

  interface VueConstructor {
    $cookies: JsCookieVue;
  }
}
