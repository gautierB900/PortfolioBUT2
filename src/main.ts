import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#7b1e3a',
        },
      },
      light: {
        colors: {
          primary: '#7b1e3a',
        },
      },
    },
  }
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
