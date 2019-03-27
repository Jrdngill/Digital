<template>
  <div>
    <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
      <flag :iso="entry.flag" v-bind:squared="false"/>
      {{entry.title}}
    </button>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";
export default {
  name: "Languages",
  data() {
    return {
      languages: [
        { flag: "GB", language: "en", title: "English" },
        { flag: "NL", language: "nl", title: "Dutch" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style scoped lang="scss">
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
</style>