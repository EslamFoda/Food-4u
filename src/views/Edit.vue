<template>
<Navbar/>
  <form @submit.prevent="handleUpdate">
      <h2>Update the meal</h2>
      <label>meal tittle:</label>
      <input v-model="title" type="text" required>
      <label>Add or remove an ingredient(press enter to add, click to remove):</label>
      <input @keydown.prevent.enter="handleKeyDown" v-model="receipe" type="text">
      <span @click="deleteRec(index)" v-for="(rec,index) in receipes" :key="index" class="rece">
          {{rec}}
      </span>
      <button>UPDATE MEAL</button>
  </form>
</template>

<script>
import {  ref } from 'vue'
import Navbar from '../components/Navbar'
import {projectFirestore} from '../firebase/config'
import { useRouter } from 'vue-router'
export default {
    props:['id'],
    components:{Navbar},
    setup(props) {
        const deleteRec = (i)=>{
            return receipes.value.splice(i,1)
        }
        const router = useRouter()
        const receipe = ref('')
        const title = ref('')
        const receipes = ref([])

         const handleKeyDown = ()=>{
            
            if(!receipes.value.includes(receipe.value.trim())){
                receipes.value.push(receipe.value.trim())
            }
            receipe.value = ''
        }



        const load = async() =>{
            const res = await projectFirestore.collection('meals').doc(props.id).get()
            title.value = res.data().title
            receipes.value = res.data().receipes
            
        }

        const handleUpdate = async()=>{
            await projectFirestore.collection('meals').doc(props.id).update({
                title: title.value,
                receipes: receipes.value
            })
            router.push('/')

        }



        load()



        return {load,title,receipes,receipe,handleUpdate,router,handleKeyDown,deleteRec}
        
    }

}
</script>

<style scoped>
.rece{
    cursor: pointer;
}

</style>