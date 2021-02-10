<template>
  <div
    class="register-page d-flex justify-content-center align-items-center flex-column"
  >
    <div class="blur"></div>
    <div class="form-container">
      <div
        class="header text-white font-weight-bold px-4 py-3 d-flex justify-content-between w-100"
      >
        Kayıt Ol
        <Logo />
      </div>
      <form class="register-form px-4 py-2">
        <div class="form-group pt-2 pb-3">
          <input
            v-model="registerData.name"
            type="text"
            placeholder="İsim"
            name="name"
            id="name"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="registerData.surname"
            placeholder="Soyisim"
            type="text"
            name="surname"
            id="surname"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="registerData.username"
            placeholder="Kullanıcı Adı"
            type="text"
            id="username"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="registerData.email"
            placeholder="Email adresi"
            type="email"
            id="email"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="registerData.phone"
            placeholder="(555) 160 41 42"
            type="number"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="registerData.password"
            placeholder="Parola"
            type="password"
            id="password"
          />
        </div>
        <div class="form-group pb-3">
          <input
            v-model="registerData.repeatPassword"
            placeholder="Parola Tekrar"
            type="password"
            id="password2"
          />
        </div>
        <app-button
          @click.native="sendRegisterData()"
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
      registerData: {
        name: null,
        surname: null,
        username: null,
        email: null,
        password: null,
        phone:null,
        repeatPassword: null,
      },
    };
  },
  methods: {
    sendRegisterData() {
      if (this.emptyControl()) {
        if (
          this.comparePassword(
            this.registerData.password,
            this.registerData.repeatPassword
          )
        ) {
          this.$store.dispatch("auth/signUpUser", this.registerData);
        }
      } else {
        alert("lütfen bütün alanları doldurunuz !!");
      }
    },
    emptyControl() {
      let access = true;

      for (let key in this.registerData) {
        if (!this.registerData[key]) {
          access = false;
        }
      }
      return access;
    },
    comparePassword(pass1, pass2) {
      return pass1 === pass2;
    },
  },
};
</script>
    
<style scoped>
.register-page {
  background: var(--middle-blue);
  min-height: 100vh;
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

@media (max-width:720px){
    .form-container{
        width:100vw;
        height:100vh;
        border-radius: 0;
    }
    .header{
        border-radius: 0;
    }
}

</style>