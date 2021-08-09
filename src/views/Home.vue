<template>
  <Navbar/>
   <List :meals='meals'/>
  
</template>

<script>
import { ref } from 'vue'
import {projectFirestore} from '../firebase/config'
import List from '../components/List'
import Navbar from '../components/Navbar'


export default {
    components:{List,Navbar},
    setup(props) {

        const meals = ref([])
        const  load = async() =>{
            const res = await projectFirestore.collection('meals').get()
            meals.value = res.docs.map(doc =>{
                return {...doc.data(), id: doc.id}
            })
        }

       const change = async()=>{
           await projectFirestore.collection('meals').onSnapshot(snapshot =>{
               snapshot.docChanges().forEach(change =>{
                   if(change.type === 'removed'){
                    load()
                   } else if(change.type === 'added'){
                        load()
                   }
               })
           })
       }
        
     change()
        
        load()
        

      
     return {meals,load,change}
       
    }

}
</script>

<style>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.flex-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 7rem;
    background-color: rgb(103, 31, 220);
    position: relative;
}
.flex-top h1{
    color: white;
}
.circle {
    width: 3.6rem;
    height: 3.7rem;
    background: rgb(248, 24, 65);
    text-align: center;
    border-radius: 50%;
    position: absolute;
    bottom: -1.5rem;
    right: 4rem;
    cursor: pointer;
}
.circle span {
    font-size: 3rem;
    font-weight: bold;
    color: white;
}

</style>