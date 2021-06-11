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
import axios from "axios";
export default {
name: "Home",
    components: {Article, Footer, Header},
    data(){
        return{
            apiKey : "0b03ebb024eb489db4da7be90962a42f",
            articles: []
        }
    },
    created() {
        let currentDate = this.getCurrentDate();
        axios.get('https://newsapi.org/v2/everything?q=Apple&from='+currentDate+'&sortBy=popularity&apiKey='+this.apiKey)
            .then((response => {
                this.articles = [];
                let fetchArticles = response.data.articles;
                Object.values(fetchArticles).forEach((elem) =>{
                  this.articles.push({
                    description: elem.description,
                    imageUrl: elem.urlToImage,
                    articleUrl: elem.url,
                    title: elem.title,
                    date: elem.publishedAt,
                  })
                })
            }));
    },
  methods:{
        getCurrentDate(){
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            return  yyyy+'-'+mm+'-'+dd;
        }
    },
}
</script>

<style scoped>

</style>