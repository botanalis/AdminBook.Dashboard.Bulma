<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../../assets/images/logo.png" alt="">
      </a>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <smal>Publishing at the speed of technology</smal>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
            Ching Feng
          </div>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <div>
                <span class="icon">
                  <i class="fa fa-user-circle-o"></i>
                </span>
                Profile
              </div>
            </a>
            <a class="navbar-item">
              <div>
                <span class="icon">
                  <i class="fa fa-bug"></i>
                </span>
                Report bug
              </div>
            </a>
            <a class="navbar-item">
              <div>
                <span class="icon">
                  <i class="fa fa-sign-out"></i>
                </span>
                Sign Out
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>

</style>
