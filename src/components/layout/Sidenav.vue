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
      <li
        v-for="item in items"
        :key="item.title"
        class="sidenav_list-item"
        :class="item.submenu ? 'has-sub' : ''"
      >
        <template v-if="item.submenu">
          <a href="#" @click="toggleSub($event)">
            <icon :feather="item.icon"></icon> <span>{{ item.title }}</span>
          </a>
          <ul class="sub-menu">
            <li
              v-for="(subitem, i) in item.submenu"
              :key="i"
              class="sidenav_list-item"
            >
              <router-link :active="'active'" :to="'/submenu' + i">
                <icon :feather="'circle'"></icon>
                <span>{{ subitem.title }}</span>
              </router-link>
            </li>
          </ul>
        </template>
        <template v-if="item.to">
          <router-link :active="'active'" :to="item.to">
            <i :data-feather="item.icon"></i> <span>{{ item.title }}</span>
          </router-link>
        </template>
      </li>
    </ul>
  </aside>
</template>
<script>
// import VueRouter from "vue-router";
export default {
  name: "Sidenav",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "home", to: { name: "Dashboard" } },
        { title: "Buttons", icon: "target", to: { name: "Buttons" } },
        {
          title: "SubMenu",
          icon: "layers",
          submenu: [
            { title: "Item 1", to: { name: "" } },
            { title: "Item 2", to: { name: "" } },
            { title: "Item 3", to: { name: "" } },
          ],
        },
        { title: "Inputs", icon: "type", to: { name: "Inputs" } },
        { title: "Lists", icon: "list", to: { name: "Lists" } },
      ],
    };
  },
  updated() {
    this.classSubMenu();
  },
  mounted() {
    this.sidenavHandler();
    this.classSubMenu();
    this.$router.afterEach(() => {
      setTimeout(()=> {
        this.classSubMenu();
      },1)
      return;
    })
  },
  methods: {
    sidenavHandler() {
      let menuIcon = document.querySelector(".menu-icon");
      let sidenavClose = document.querySelector(".sidenav__close-icon");
      let menuItems = document.querySelectorAll(".sidenav_list-item:not(.has-sub)");

      //Abrir
      menuIcon.addEventListener("click", () => {
        this.openNav();
      });

      //Cerrar
      menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
          this.closeNav();
        });
      });
      sidenavClose.addEventListener("click", () => {
        this.closeNav();
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
        this.closeNav();
      });
    },
    closeNav() {
      let sidenav = document.querySelector(".sidenav");
      let app = document.querySelector("#app");
      let overlay = document.querySelector("#app .sidenav-overlay");
      sidenav.classList.remove("active");
      if (overlay != null) {
        setTimeout(() => {
          app.removeChild(overlay);
        }, 500);
      }
    },
    toggleSub(e) {
      let itemMenu = e.target.closest("li.sidenav_list-item.has-sub");
      if(itemMenu){
        if (itemMenu.classList.contains("opened")) {
          itemMenu.classList.remove("opened");
        } else {
          itemMenu.classList.add("opened");
        }
      }
    },
    classSubMenu() {
      let items = document.querySelectorAll("li.sidenav_list-item.has-sub.opened");
      items.forEach((item) => {
        item.classList.remove("opened");
      })
      let linkActive = document.querySelector(".sidenav_list-item>a.active");
      let itemList = linkActive.closest("li.sidenav_list-item.has-sub");
      if(itemList){
        if (!itemList.classList.contains("opened")) {
          itemList.classList.add("opened");
        }
      }
    },
  },
};
</script>