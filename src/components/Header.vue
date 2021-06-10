<template>
  <header>
    <div id="logo">
      <h1>Fake News <span id="iisrt"><span id="ii">II</span>  <span id="srt">FAKE</span></span></h1>
      <div id="tagline">
        <h2>Just another VueJS Project !</h2>
      </div>
    </div>
    <nav>
      <ul>
        <li><router-link to="/" id="homenav">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>