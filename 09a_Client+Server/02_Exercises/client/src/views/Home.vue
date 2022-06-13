<template>
  <!--
    Vue Directives: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
    -->
  <div class="box">
      <h1 v-text="title"></h1>
    <p v-if="true" v-text="textde">Loading...</p>
    <p v-else-if="false" v-text="texten"></p>
   <a
            v-else
            :href="link.url"
            :target="link.target"
            :tabindex="link.tabindex"
            v-text="link.title"
    />
      <img src="../assets/nagelstudio.png"/>
    <br> <br>
      <h2 v-if="true" v-text="untertitelde">Loading...</h2>
      <h2 v-else<br>
      <img src="../assets/anfahrt.png"/>

  </div>
</template>

<script>
  export default {
      data() {
          return {
              // v-text
              title: 'Nail Art Studio & Academy',
              textde: 'Herzlich Willkommen in unserer kreativen Welt der Nägel.\n' +
                  'Bist du gestalterisch interessiert und hast ein flair für Farben und Design? Kaufe jetzt in unserem Shop die neusten Produkte und mach dich gleich ans Werk!\n' +
                  '\n' +
                  '\n' +
                  '\n' +
                  'Aber auch viel beschäftigten Kunden sind bei uns gern gesehen. Setzten Sie sich hin und entspannen Sie ein wenig, während ihre Nägel in wahre Kunstwerke verwandelt werden.',

              texten: 'Welcome to our creative world of nails.\n' +
                  'Are you interested in design and have a flair for colors and design? Buy now in our store the latest products and get to work right away!\n' +
                  '\n' +
                  '\n' +
                  '\n' +
                  'But also busy customers are welcome to visit us. Sit down and relax a little while their nails are transformed into true works of art.',
              // v-bind
              link: {
                  url: 'https://angelnails.mytreatwell.ch',
                  target: '_blank',
                  tabindex: '0',
                  title: 'Credits to Angel Nails',
              },
              untertitelde: 'Anfahrt',
              untertitelen: 'Directions',
          }
      }
  }
</script>
<style>
    * { background-color: #faf3f2;
    }
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 20vw;

    }
    img {
        margin: 3vh 0 10vh 0;
    }
</style>



