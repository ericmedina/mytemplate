<template>
  <aside class="sidenav">
    <div class="sidenav-header">
      <img class="sidenav-logo" src="images/Logo.png" alt="" srcset="" />
      <div class="sidenav__close-icon">
        <icon feather="x"></icon>
      </div>
    </div>
    <ul class="sidenav_list">
      <li class="sidenav_list-title">Mi menú</li>
      <li v-for="item in items" :key="item.title" class="sidenav_list-item">
        <router-link :active="'active'" :to="item.to">
          <i :data-feather="item.icon"></i> <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "Sidenav",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "home", to: { name: "Dashboard" } },
        { title: "Buttons", icon: "target", to: { name: "Buttons" } },
        { title: "Inputs", icon: "type", to: { name: "Inputs" } },
        { title: "Lists", icon: "list", to: { name: "Lists" } },
      ],
    };
  },
  mounted() {
    this.sidenavHandler();
  },
  methods: {
    sidenavHandler() {
      let menuIcon = document.querySelector(".menu-icon");
      let sidenavClose = document.querySelector(".sidenav__close-icon");
      let menuItems = document.querySelectorAll(".sidenav_list-item");

      //Abrir 
      menuIcon.addEventListener("click", () => {
        this.openNav()
      });

      //Cerrar
      menuItems.forEach((menuItem)=>{
        menuItem.addEventListener("click", () => {
          this.closeNav()
        });
      })
      sidenavClose.addEventListener("click", () => {
        this.closeNav()
      });
    },
    openNav() {
      let sidenav = document.querySelector(".sidenav");
      let app = document.querySelector("#app");
      let overlay = document.createElement("div");
      overlay.classList.add("sidenav-overlay");
      sidenav.classList.add("active");
      app.appendChild(overlay);
      overlay.addEventListener("click", () => {
        this.closeNav()
      });
    },
    closeNav(){
      let sidenav = document.querySelector(".sidenav");
      let app = document.querySelector("#app");
      let overlay = document.querySelector("#app .sidenav-overlay");
      sidenav.classList.remove("active");
      if(overlay != null){
        setTimeout(()=>{
          app.removeChild(overlay)
        }, 500)
      }
    }
  },
};
</script>