<template>
  <nav class="navbar">
    <button class="menu-icon">
      <icon feather="menu"></icon>
    </button>
    <button class="navbar_profile">
      <div class="profile_user">
        <span class="username">
        Eric Medina
        </span>
        <span class="role">
          Administrador
        </span>
      </div>
      <img class="profile_thumbnail" src="images/profile.jpg" alt="">
    </button>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>