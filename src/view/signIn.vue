<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box">
              <!--圖示-->
              <div class="field has-text-centered">
                <img alt="Vue logo" src="../assets/logo.png" width="167">
              </div>
              <!--Email-->
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" class="input" placeholder="e.g vue@gmail.com" required>
                  <span class="icon is-small is-left">
                    <font-awesome-icon v-bind:icon="['fas', 'envelope']" />
                  </span>
                </div>
              </div>
              <!--密碼-->
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" class="input" placeholder="*********" required>
                  <span class="icon is-small is-left">
                    <font-awesome-icon v-bind:icon="['fas', 'lock']" />
                  </span>
                </div>
              </div>
              <!--Remember me-->
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <!--Button-->
              <div class="field">
                <button class="button is-success">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "signIn"
}
</script>

<style scoped>

</style>
