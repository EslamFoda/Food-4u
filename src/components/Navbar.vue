<template>
  <div class="flex-top">
    <router-link :to="{name:'Home'}"><h1>Food 4 You</h1></router-link>
      <router-link :to="{name:'Create'}">
      <div class="circle"><span>+</span></div>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
a{
  color: white;
  text-decoration: none;
}
.circle:hover{
  opacity: .9;
}
</style>