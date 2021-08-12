<template>
  <div ref="modal-container" class="modal-container">
    <div class="modal">
      <slot name="modal-title"></slot>
      <slot name="modal-body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      app: document.querySelector("#app"),
      overlay: document.createElement("div"),
    };
  },
  mounted() {
    this.createModal();
  },
  destroyed() {
    this.app.removeChild(this.overlay);
  },
  methods: {
    createModal() {
      //Máscara
      this.overlay.classList.add("modal-overlay");
      this.app.appendChild(this.overlay);
      //Mostrar Modal
      let modal = this.$refs["modal-container"].querySelector(".modal");
      modal.classList.add("fade-in");
      setTimeout(() => {
        modal.classList.remove("fade-in");
      }, 400);
      //Listener close
      this.$refs["modal-container"].addEventListener("click", (e) => {
        if (this.$refs["modal-container"] == e.target) {
          this.closeModal();
        }
      });
    },
    closeModal() {
      let modal = this.$refs["modal-container"].querySelector(".modal");
      modal.classList.add("fade-out");
      setTimeout(() => {
        modal.classList.remove("fade-out");
        this.$emit("close")
      }, 400);
    },
  },
};
</script>