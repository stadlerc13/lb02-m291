<template>

    <div id="app">
        <div id="logo"><a href="/"> <img class="logo" alt="BZZ logo" src="./assets/logo.png"></a></div>
        <div id="nav">
            <router-link class="nav" to="/products">Shop</router-link>
            |
            <router-link class="nav" to="/checkout">Checkout</router-link>
            |
            <router-link class="nav" to="/newsletter">Newsletter</router-link>
            <!-- Decoupling Params with Props -->
            <!-- Passing Route Parameters -->
            <!--  Template für Paratmeter <router-link :to="{ name: 'about', params: { user: 'of Hans Muster'}}">About</router-link> -->
        </div>
        <router-view/>
        <!-- <MyNavigation/> -->
    </div>
</template>
<style>
    * {
        background-color: #faf3f2;
    }

    #nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 42vw 10vh 42vw;
        text-decoration: none;
        color: #5a141d;


    }

    #logo {
        margin: 0 5vw;
    }

    .nav {
        color: #5a141d;
        font-size: large;
    }
</style>

