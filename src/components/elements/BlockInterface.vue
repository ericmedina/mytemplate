<template>
  <div class="overlay-loader">
    <div class="block">
      <div class="loader">
        <div class="ball-pulse-sync">
          <div class="bg-success"></div>
          <div class="bg-success"></div>
          <div class="bg-success"></div>
        </div>
        <h4 >{{ msg ? msg : "Cargando" }}...</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlockInterface",
  data() {
    return {
      puntos: "...",
      msg: "",
    };
  },
  props: ["mensaje"],
  mounted() {
    document.querySelector("body").style.overflow = "hidden";
    let modalCount = localStorage.getItem("modal");
    localStorage.setItem("modal", parseInt(modalCount) + 1);
    this.msg = this.mensaje;
  },
  destroyed() {
    let modalCount = localStorage.getItem("modal");
    modalCount -= 1 
    localStorage.setItem("modal", modalCount);
    if (modalCount == 0) {
      document.querySelector("body").style.overflow = "auto";
    }
  },
};
</script>
<style>
.overlay-loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ball-pulse-sync > div {
  background-color: var(--primary-color);
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
}
.ball-pulse-sync > div:nth-child(1) {
  animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
}
.ball-pulse-sync > div:nth-child(2) {
  animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
}
.ball-pulse-sync > div:nth-child(3) {
  animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
}
@keyframes ball-pulse-sync {
  33% {
    transform: translateY(10px);
  }
  66% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.loader {
  background: white;
  padding: 30px;
  width: auto;
  height: auto;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
.loader h4 {
  margin-top: 25px;
  margin-bottom: 0;
  font-size: 1.2rem;
}
</style>