<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SplashScreen from '@/components/pages/SplashScreen.vue'


</script>

<template>
  <div id="layout">
  <header>

    <div class="wrapper">
      <!-- <nav>
        <RouterLink :to="{ name:'event-list' }">Events</RouterLink> |
        <RouterLink :to="{ name:'login' }">Login</RouterLink>
      </nav> -->
    </div>
  </header>
<div class="flex-container">
  <SplashScreen />
  <RouterView class="router-view"/>

</div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&display=swap');
body {
  margin: 40px 0 24px 0;
  background: #EBB58F !important;
  font-family: "Azeret Mono", serif;
}
#layout {
  font-family: "Azeret Mono", serif;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: absolute;
  display:flex;
  align-self: center;
  justify-self:center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color:#42b983;
}

h2 {
  font-size: 20px;
}

.flex-container{
  display:flex;
  justify-content: center;
  align-items: center;

}

.router-view{
  width: 50vw;
}
</style>
