<template>
  <aside class="sidenav">
    <div class="sidenav__close-icon">
      <i class="fas fa-times"></i>
    </div>
    <div class="sidenav-header">
      <img class="sidenav-logo" src="images/Logo.png" alt="" srcset="">
    </div>
    <ul class="sidenav_list">
      <li class="sidenav_list-item">Dashboard</li>
      <li class="sidenav_list-item active">Buttons</li>
      <li class="sidenav_list-item">Inputs</li>
      <li class="sidenav_list-item">Item Four</li>
      <li class="sidenav_list-item">Item Five</li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "Sidenav",
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