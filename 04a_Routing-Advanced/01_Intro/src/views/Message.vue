<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div>
    <h1>Newsletter</h1>
    <p v-for="(m, i) in newsletter" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsletter: [
        'Hello, how are you?',
        'The weather is nice',
        'This is message feed',
        'And I am the fourth message'
      ]
    }
  }
}
</script>
