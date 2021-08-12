<template>
  <div id="app" class="grid-app">
    <Navbar></Navbar>
    <Sidenav></Sidenav>
    <Index></Index>
  </div>
</template>
<script>
import Navbar from "@/components/layout/Navbar";
import Index from "@/components/Index";
import Sidenav from "@/components/layout/Sidenav.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Index,
    Sidenav,
  }
};
</script>
