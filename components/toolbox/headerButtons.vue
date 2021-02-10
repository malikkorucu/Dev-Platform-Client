<template>
  <div class="header-btn-group d-flex">
    <div class="dr search-btn px-3 d-flex align-items-center">
      <i class="fas fa-search"></i>
    </div>

    <div v-if="signedInUser" class="signed-in-user d-flex">
      <div class="dr d-flex align-items-center px-3">
        <div class="notification position-relative">
          <span
            class="not-count d-flex align-items-center justify-content-center"
          >
            <strong>25</strong>
          </span>
          <i style="font-size: 35px" class="far fa-bell"></i>
        </div>
      </div>

      <div class="dropdown-container position-relative">
        <div @click="dropdownOpen = !dropdownOpen" class="dr py-2 px-3">
          <img
            width="50"
            ref="img"
            height="50"
            class="img"
            style="border-radius: 50%"
            src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
          />
          <i class="fas fa-angle-down ml-2"></i>
        </div>
        <transition
          enter-active-class="animate__bounceIn"
          leave-active-class="animate__bounceOut"
        >
          <div v-if="dropdownOpen" class="dropdown animate__animated">
            <ul class="p-0">
              <li @click="signOut()" class="px-3 py-2">
                <i class="mr-2 fas fa-times"></i>
                Çıkış Yap
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <div v-else class="default-buttons d-flex ">
      <nuxt-link
        tag="div"
        :to="{ name: 'auth-register' }"
        class="dr d-flex align-items-center px-3"
      >
        <span class="sign-up"
          ><i class="fas fa-user-plus mr-2 py-3"></i><span>Kayıt Ol</span></span
        >
      </nuxt-link>
      <nuxt-link
        tag="div"
        :to="{ name: 'auth-login' }"
        class="dr d-flex align-items-center px-3"
      >
        <span class="sign-'n"
          ><i class="fas fa-user-plus mr-2"></i><span>Giriş Yap</span></span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import badge from "../toolbox/badge";
import { mapGetters ,mapActions} from "vuex";

export default {
  components: {
    appBadge: badge,
  },
  data() {
    return {
      dropdownOpen: false,
      menuAction:'',
      userMenu: [
        {
          id: 1,
          title: "menu 1",
          icon: "fas fa-times",
        },
        {
          id: 2,
          title: "menu 1",
          icon: "fas fa-times",
        },
        {
          id: 3,
          title: "menu 1",
          icon: "fas fa-times",
        },
        {
          id: 4,
          title: "menu 1",
          icon: "fas fa-times",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      signedInUser: "auth/signedInUser",
    }),
  },
  methods: {
      ...mapActions({
          signOut:'auth/signOut'
      })
  },
  mounted() {
    document.addEventListener("click", (e) => {
      let tmp = e.path.find((el) => {
        if (el.classList && el.classList.contains("dropdown-container")) {
          return el;
        }
      });
      if (!tmp) this.dropdownOpen = false;
    });
  },
};
</script>

<style scoped>
.animate__animated {
  animation-duration: 0.5s;
}
.default-buttons i {
  font-size: 25px;
  color: var(--main-blue);
}
.dr {
  cursor: pointer;
  border-left: 1px solid var(--border-grey);
}

.search-btn {
  display: none !important;
}

.not-count {
  font-size: 12px;
  background: rgb(247, 124, 124);
  color: white;
  padding: 5px;
  width: 20px;
  display: inline-block;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: -4px;
  top: -5px;
}

.dropdown {
  position: absolute;
  width: 250px;
  right: 0;
  cursor: pointer;
}

.dropdown ul {
  list-style-type: none;
  border: 1px solid var(--border-grey);
  background: var(--main-bg-color);
}

.dropdown ul li:hover {
  cursor: pointer;
}

.dropdown ul li:hover {
  background: rgb(235, 235, 235);
}

@media (max-width: 960px) {
  .search-btn {
    display: flex !important;
  }
}
</style>