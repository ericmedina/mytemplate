<template>
  <aside class="sidenav">
    <div class="sidenav__close-icon">
      <i class="fas fa-times"></i>
    </div>
    <div class="sidenav-header">
      <img class="sidenav-logo" src="images/Logo.png" alt="" srcset="" />
    </div>
    <ul class="sidenav_list">
      <li class="sidenav_list-title">Mi menú</li>
      <li v-for="item in items" :key="item.title" class="sidenav_list-item">
        <router-link :active="'active'" :to="item.to"> <i :data-feather="item.icon" ></i> <span>{{item.title}}</span> </router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "Sidenav",
  data(){
    return{
      items:[
        {title:'Dashboard', icon: 'home', to:{name:'Dashboard'}},
        {title:'Buttons', icon: 'target', to:{name:'Buttons'}},
        {title:'Inputs', icon: 'type', to:{name:'Inputs'}},
      ]
    }
  },
  mounted() {
    this.sidenavHandler();
  },
  methods: {
    sidenavHandler() {
      let menuIcon = document.querySelector(".menu-icon");
      let sidenav = document.querySelector(".sidenav");
      let sidenavClose = document.querySelector(".sidenav__close-icon");

      menuIcon.addEventListener("click", () => {
        sidenav.classList.toggle("active");
      });
      sidenavClose.addEventListener("click", () => {
        sidenav.classList.toggle("active");
      });
    },
  },
};
</script>