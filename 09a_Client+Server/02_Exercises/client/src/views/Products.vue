<template>
  <div class="boxe">
      <h2>Unsere Produkte</h2>
      <table>
        <thead>
        <tr>
          <th>Produktname</th>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <th>Preis</th>
          <th>&nbsp;</th>
          <th>Hinzufügen</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        <!-- ?? -->
        <tr v-for="(product, idx) in products" :key="idx">
          <td>{{ product.name }}</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>{{ product.price.toFixed(2) }}</td>
          <td>{{ product.waehrung}}</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>
            <b-button variant="success"  @click="addToCart(product)">+</b-button>
            <b-button variant="danger" @click="removeFromCart(product)">-</b-button>
          </td>
        </tr>
        </tbody>
      </table>
      <Cart/>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Cart from  '../components/Cart';
export default {
  name: 'Products',
  components: {
    Cart
  },
  computed: mapState(['products']),
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
  }
}
</script>

<style>
  * {
    background-color: #faf3f2;
  }
  .boxe {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 20vw 0 35vw;
    width: 25vw;

  }
  img {
    margin: 3vh 0 10vh 0;
  }

</style>
