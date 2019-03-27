// https://github.com/kazupon/vue-i18n https://medium.freecodecamp.org/how-to-add-internationalization-to-a-vue-application-d9cfdcabb03b
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        heroMsg: 'WE ARE MAESTRO'
    },
    'nl': {
        heroMsg: 'WIJ ZIJN MAESTRO'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'nl', // set fallback locale 
    messages, // set locale messages
});

export default i18n;