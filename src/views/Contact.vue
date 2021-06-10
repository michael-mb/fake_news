<template>

  <div id="wrapper">
    <Header></Header>
    <section>
      <div id="contactpost">
        <h1>Contact Us</h1>
        <br>
        <p>Send a mail to <a target="_blank" href="mailto:mbonimichael@yahoo.fr">mbonimichael@yahoo.fr</a></p>
      </div>

      <Footer></Footer>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Contact",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>