<template>
  <Navbar/>
  <div class="container">

  <form @submit.prevent="handleSubmit">
      <h2>Add New Meal Recipe</h2>
      <label>Food tittle:</label>
      <input v-model="title" type="text" required>
      <label>Add an ingredient(press enter to add):</label>
      <input @keydown.prevent.enter="handleKeyDown" v-model="receipe" type="text">
      <span v-for="rec in receipes" :key="rec" class="rece">
          {{rec}}
      </span>
      <button>ADD MEAL</button>
  </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from '../components/Navbar'
import {projectFirestore} from '../firebase/config'
import { useRouter } from 'vue-router'

export default {
    components:{Navbar},
    setup(props) {
        const router = useRouter()
        const title = ref('')
        const receipe = ref('')
        const receipes = ref([])

        const handleKeyDown = ()=>{
            
            if(!receipes.value.includes(receipe.value.trim())){
                receipes.value.push(receipe.value.trim())
            }
            receipe.value = ''
        }

        const handleSubmit = async() => {
            const meal = {
                title: title.value,
                receipes : receipes.value
            }
            const res = await projectFirestore.collection('meals').add(meal)
            router.push('/')
        }
        




        return{title,receipe,receipes,handleKeyDown,handleSubmit}
    }

}
</script>

<style>
.container{
    padding: 1rem;
}
form{
    height: auto;
    max-width: 30rem;
    min-width: 250px;
    margin: 5rem auto;
    background: rgb(255, 255, 255);
    padding: 2rem;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.289);

}
form h2 {
    text-align: center;
    color: rgb(103, 31, 220);
    margin-bottom: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
label{
    display: block;
    color: rgba(68, 68, 68, 0.604);
    margin: 1rem 0;
}
input{
    width: 100%;
    border: none;
    border-bottom: 1px solid rgb(130, 128, 128);
    padding-bottom: .5rem;
    font-size: 1.1rem;
    
}
button{
    display: block;
    background: rgb(248, 24, 65);
    border: none;
    color: white;
    margin: 2rem auto;
    padding: .5rem 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: all .2s ease-in-out;
}
button:hover{
    opacity: .8;
}
</style>