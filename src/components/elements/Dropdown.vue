<template>
  <div class="dropdown">
    <div class="dropdown-button" @click="toggle">
      <slot name="button"> </slot>
    </div>
    <div class="dropdown-content" ref="content">
      <slot name="content"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "dropdown",
  data(){
    return{
      content: null
    }
  },
  mounted(){
    this.content = this.$refs['content']
  },
  methods: {
    toggle() {
      if(this.content.classList.contains('show')){
        this.content.classList.remove('show')
        window.removeEventListener("click", this.close);
      }else{
        window.addEventListener("click", this.close);
        this.content.classList.add('show')
      }
    },
    close(e){
      if (!this.$el.querySelector('.dropdown-button').contains(e.target)) {
        if (this.content.classList.contains("show")) {
          this.content.classList.remove("show");
          window.removeEventListener("click", this.close);
        }
      }
    }
  },
};
</script>