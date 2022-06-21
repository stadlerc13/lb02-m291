<template>
    <div>
        <table>
            <thead>
            <h2>Warenkorb</h2>
            <tr>
                <th>Produktname</th>
                <th>Anzahl</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(product, idx) in cart" :key="idx">
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Cart',
        computed: mapState(['cart'])
    }
</script>

<style>
    table {
        margin: 5vh 0;
    }
</style>