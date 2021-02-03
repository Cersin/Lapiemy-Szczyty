<template>
  <div class="home">
    <home-header></home-header>
    <div class="articles">
     <card v-for="(article,id) in articles" 
        :key="id" 
        :title=article.title 
        :category=article.category 
        :distance=article.distance 
        :description=article.description
     ></card>
    </div>
  </div>
</template>

<script>

import HomeHeader from "@/components/home-header";
import Card from "@/components/card";
export default {
  name: "Home",
  components: {Card, HomeHeader},
  data(){
    return{
      articles:[
        {title:"Na Chebzie i nazot",category:"Pieszo",distance:"2km",description:"Jak se iść na Chebzie co by się nie zmęczyć"},
        {title:"W pogoni za dawnym laskiem",category:"Rowerek",distance:"4km",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam."},
        {title:"Do Jaworzna",category:"Brum brum",distance:"60km",description:"Tam skąd ludzie tak szybko nie wracają, o ile wgl wracają"},
        {title:"Trzy Szczyty - Kriźna, Ostredok i Plośka",category:"Wycieczki, Słowacja", distance:"7,6km",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum accusamus ullam nihil enim saepe itaque ad quis modi eligendi qui voluptatum animi, magni ducimus harum numquam similique incidunt inventore laboriosam."}
      ],
      zmienna: 12,
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100%;
    display: grid;
    grid-template-rows: 20vw 1fr repeat(2, min-content);
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 3rem;
    padding: 2rem;
    justify-self: center;
    width: 70%;
    
    @media only screen and (max-width: 700px)  {
      width: 100%;
    }
  }
</style>
