<template>
  <div class="box">
    <h2>Checkout</h2>
    <br>
    <p>Dein Warenkorb hat einen Wert von CHF {{ cartTotal.toFixed(2) }}.</p>
    <b-button class="button" variant="primary" v-show="cartTotal > 0" @click="checkout">Bestellen</b-button>
  </div>

</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Bestellung erfolgreich!');
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
  p {
    margin: 3vh 20vw;
  }
  img {
    margin: 3vh 0 10vh 0;
  }
.button {
  background-color: #5a141d;
  color: white;
  border-color: #5a141d;

}

</style>