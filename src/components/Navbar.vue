<template>
<nav class="navbar navbar-dark bg-info navbar-expand-sm">
	<div class="container">
		<router-link to="/" class="navbar navbar-brand">Vue Router</router-link>
	 <div class="collapse navbar-collapse">
     <ul class="navbar-nav">
       <li class="nav-item">
         <router-link class="nav-link px-4" to="/">Home</router-link>
       </li>
       <li class="nav-item">
         <router-link class="nav-link px-4" to="/users">Users</router-link>
       </li>
       <li class="nav-item">
         <router-link class="nav-link px-4" to="/about">About</router-link>
       </li>
     </ul>
   </div>
  </div>
</nav>

</template>

<script>
export default {

  name: 'Navbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>