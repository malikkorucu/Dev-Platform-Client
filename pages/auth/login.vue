<template>
  <div
    class="login-page d-flex justify-content-center align-items-center flex-column"
  >
    <div class="blur"></div>
    <div class="form-container">
      <div
        class="header text-white font-weight-bold px-4 py-3 d-flex justify-content-between w-100"
      >
        Giriş Yap
        <Logo />
      </div>
      <form class="register-form px-4 py-3">
        <div class="form-group pb-3">
          <input
            v-model="loginData.emailOrUsername"
            placeholder="Kullanıcı adı veya email adresi"
            type="text"
            id="username"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="loginData.password"
            placeholder="Parola"
            type="password"
            id="password"
          />
        </div>
        <app-button
          @click.native="sendLoginData()"
          type="primary big block"
          title="Kayıt Ol"
        ></app-button>
      </form>
    </div>
  </div>
</template>

<script>
import button from "../../components/toolbox/button";
import Logo from "../../components/Logo";

export default {
  components: {
    appButton: button,
    Logo,
  },
  data() {
    return {
      loginData: {
        emailOrUsername: null,
        password: null,
      },
    };
  },
  methods: {
    sendLoginData() {
      if (this.emptyControl()) {
        const email = this.loginData.emailOrUsername.split("").includes("@")
          ? this.emailOrUsername
          : undefined;
        const username = email ? undefined : this.loginData.emailOrUsername;

        let data = {
          username: username ? username : null,
          email: email ? email : null,
          password: this.loginData.password,
        };

        this.$store.dispatch("auth/signInUser", data);
      }
    },
    emptyControl() {
      let access = true;
      for (let key in this.loginData) {
        if (!this.loginData[key]) access = false;
      }
      return access;
    },
  },
};
</script>

<style scoped>
.login-page {
  background: var(--middle-blue);
  min-height: 100vh;
}

.custom-container {
  width: 80%;
  margin: 0 auto;
}

.blur {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
}

.header {
  background: var(--dark-blue);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  font-size: 25px;
}

.form-container {
  z-index: 1;
  width: 500px;
  background: var(--middle-blue);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px !important;
}

.form-group input {
  outline: none;
  border: 1px solid var(--border-grey);
  background: var(--middle-blue);
  padding: 10px 20px;
  border-radius: 40px;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 720px) {
  .form-container {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  .header {
    border-radius: 0;
  }
}
</style>