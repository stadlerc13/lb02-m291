<template>

    <div id="app">
      <div id="logo"><a href="/"> <img class="logo" alt="BZZ logo" src="./assets/logo.png"></a></div>
        <div id="nav">
            <router-link to="/products">Shop</router-link>
            |
            <router-link to="/checkout">Checkout</router-link>
            |
            <router-link to="/newsletter">Newsletter</router-link>
            <!-- Decoupling Params with Props -->
            <!-- Passing Route Parameters -->
            <!--  Template für Paratmeter <router-link :to="{ name: 'about', params: { user: 'of Hans Muster'}}">About</router-link> -->
        </div>
        <router-view/>
       <!-- <MyNavigation/> -->
    </div>
</template>
<script>


    import SimpleNav from './components/SimpleNav'

    export default {
        name: 'app',
        components: {
            MyNavigation: SimpleNav,
        }
    }
</script>

