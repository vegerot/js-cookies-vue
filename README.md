# JS-Cookie-Vue

A simple, lightweight Vue plugin for handling cookies

- Why reinvent the wheel?  
  Instead of making yet *another* cookie-handling library, JS-Cookie-Vue uses the popular [JavaScript Cookie](https://github.com/js-cookie/js-cookie)
  library (with over 16k stars ⭐️ at the time of writing) to handle all the cookie logic.  Guarenteeing its bullet-proofness
- Minimal and robust Vue.js plugin wrapper, making this the easiest way to integrate safe cookies into your application
- (obligatory) Blazing fast 💨 


## Use

As easy as 

```javascript
// main.js
import JSCookieVue from 'js-cookie-vue';

Vue.use(JsCookieVue)
```

```javascript
// component.vue

this.$cookies.set('testName', ['test', 'value'])
// use `getJSON` to automatically parse complex values
this.$cookies.getJSON('testName') // ===['test', 'value']
```

Please see [JavaScript Cookie documentation](https://github.com/js-cookie/js-cookie#basic-usage) for all uses.

### Config

```javascript
// main.js

import JSCookieVue from 'js-cookie-vue';

Vue.use(JsCookieVue, {
  sameSite: 'lax',
  secure: !process.env.NODE_ENV || process.env.NODE_ENV === 'production',
})
```

Please see [JavaScript Cookie documentation](https://github.com/js-cookie/js-cookie#cookie-attributes) for all attribute options.

Inspired by `js-cookie` and `vue-cookies`
