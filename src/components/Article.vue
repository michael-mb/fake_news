<template>
  <article>
    <h1>{{title}}</h1>
    <img :src="imageUrl" alt="" />
    <span class="date">{{date}}</span>
    <p>{{description}}</p>
    <a :href="articleUrl" target="_blank" class="rm">Read More</a>
  </article>
</template>

<script>
export default {
  name: "Article",
  props:{
    title : String,
    description: String,
    imageUrl: String,
    articleUrl: String,
    date: String,
  }
}
</script>

<style scoped>
img{
  width: 275px;
  height: 140px;
}
.date{
  font-size: 20px;
}
</style>