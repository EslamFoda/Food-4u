<template>
  <div class="list">
      <div class="list-grid">
          <div v-for="meal in meals" :key="meal.id"  class="boxs">
         <Meal :meal='meal'/>
          </div>
      </div>
  </div>
</template>

<script>
import Meal from '../components/Meal'
export default {
    components:{Meal},
    props:['meals'],
    setup(props) {
        
    }

}
</script>

<style>
.pill{
    background: rgb(206, 198, 198);
    margin: .5rem;
    padding: .5rem;
    border-radius: 15px;
}
.list {
    padding: 3rem;
}
.list-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    
}
.box{
    min-height: 15rem;
    padding: .3rem;
    width: 100%;
    background: rgb(255, 255, 255);
    
    position: relative;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.289);
}
.delete{
    position: absolute;
    top: 0;
    right: 0;
    padding: .3rem;
    cursor: pointer;
}

.edit-cirlce{
    height: 3rem;
    width: 3rem;
    background-color: rgb(248, 24, 65);
    position: absolute;
    bottom: -1rem;
    right: 2rem;
    cursor: pointer;
    border-radius: 50%;
    color: white;
    text-align: center;
}
.edit-cirlce span{
    margin-top: .7rem;
}
h2{
     text-align: center;
    color: rgb(103, 31, 220);
    margin-bottom: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
}
@media only screen and (max-width:940px){
    html{
        font-size: 76%;
    }
.list-grid{
    grid-template-columns: repeat(2,1fr);
}
}
@media only screen and (max-width:414px){
    .list-grid{
    grid-template-columns: repeat(1,1fr);
}
}
</style>