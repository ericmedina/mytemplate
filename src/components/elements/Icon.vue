<template>
  <i :data-feather="feather"></i>
</template>
<script>
import feather from "feather-icons";
export default {
  name: "icon",
  props: {
    feather: {
      type: String,
      required: true,
      value: null,
    },
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>