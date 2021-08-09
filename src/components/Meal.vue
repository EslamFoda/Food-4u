<template>
       <div class="box">
              <span @click="handle" class="material-icons delete icon">delete</span>
              <h2>{{meal.title}}</h2>
              <span v-for="receipe in meal.receipes" :key="receipe" class='rece'>
                {{receipe}}
              </span>
              <div class="edit-cirlce">
                <router-link :to="{name:'Edit', params:{id: meal.id}}">
               <span class="material-icons edit">edit</span>
                </router-link>
              </div>
          </div>
  
</template>

<script>

import {projectFirestore} from '../firebase/config'
export default {
  props:['meal'],
  setup(props) {
    const id = props.meal.id
    const handle = async()=>{
      await projectFirestore.collection('meals').doc(id).delete()
       
      
    }
    


    return{handle,id}
    
  }

}
</script>

<style>
.rece{
  display: inline-block;
  background: rgb(230, 222, 222);
  margin: .6rem;
  padding: .3rem;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.666);
}
.edit-cirlce{
  transition: .2s all ease-in-out;
}
.edit-cirlce:hover{
  opacity: .8;

}
.icon:hover{
  opacity: .8;
  color: gray;
}
</style>