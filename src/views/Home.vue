<template>
  <div id="wrapper">
    <Header></Header>
    <section>
      <div id="line">
        <div class="dline"></div>
        <h1>NEWS</h1>
        <div class="dline"></div>
      </div>

      <div id="ourserv">
        <Article v-for="article in articles" :key="article.id" :title="article.title"
                 :image-url="article.imageUrl"
                 :article-url="article.articleUrl"
                 :description="article.description"
                  :date="article.date">
        </Article>



      </div>
    </section>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Article from "../components/Article";
export default {
name: "Home",
  components: {Article, Footer, Header},
  data(){
    return{
      articles: []
    }
  },
  created() {
    this.articles = [
      {
        id: 1,
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet.",
        imageUrl:"img/4.jpg",
        articleUrl:"/",
        date: "10.06.2021"
      },
      {
        id: 2,
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet.",
        imageUrl:"img/2.jpg",
        articleUrl:"/",
        date: "10.06.2021"
      },
      {
        id: 3,
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet.",
        imageUrl:"img/3.jpg",
        articleUrl:"/",
        date: "10.06.2021"
      },
      {
        id: 4,
        title: "web design",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet.",
        imageUrl:"img/4.jpg",
        articleUrl:"/",
        date: "10.06.2021"
      },
    ]
  }
}
</script>

<style scoped>

</style>