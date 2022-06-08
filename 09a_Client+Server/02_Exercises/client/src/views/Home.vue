<template>
  <!--
    Vue Directives: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
    -->
  <div>
    <h1 v-if="false" v-text="textde">Loading...</h1>
    <h1 v-else-if="false" v-text="texten" />
   <a
            v-else
            :href="link.url"
            :target="link.target"
            :tabindex="link.tabindex"
            v-text="link.title"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // v-text
        textde: 'Willkommen',

        texten: 'Welcome',
        // v-bind
        link: {
          url: 'https://angelnails.mytreatwell.ch',
          target: '_blank',
          tabindex: '0',
          title: 'Inspiration by Angel Nails',
        },
      }
    },
  }
</script>
</template>
