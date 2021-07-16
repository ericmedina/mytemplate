<template>
  <aside class="sidenav">
    <div class="sidenav__close-icon">
      <i class="fas fa-times"></i>
    </div>
    <ul class="sidenav__list">
      <li class="sidenav__list-item">Item One</li>
      <li class="sidenav__list-item">Item Two</li>
      <li class="sidenav__list-item">Item Three</li>
      <li class="sidenav__list-item">Item Four</li>
      <li class="sidenav__list-item">Item Five</li>
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