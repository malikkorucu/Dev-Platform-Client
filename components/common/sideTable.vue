<template>
  <div class="side-table-group">
    <div v-if="signedInUser" class="side-table" id="user-table">
      <div
        class="d-flex header justify-content-between align-items-center px-3 py-2"
      >
        <div class="table-inf">
          <i class="fas fa-user-friends"></i>
          <span class="title">{{ signedInUser.username }}</span>
        </div>
        <div class="more">
          <img width="20" src="@/assets/icons/menu.svg" alt="" />
        </div>
      </div>
      <div class="content">
        <ul class="table-list pl-3 py-3">
          <nuxt-link
            tag="li"
            :to="{ name: 'username', params: { username: 'malikkorucu' } }"
            class="pb-2"
            @click="a()"
          >
           <i class="fas mr-2 fa-question"></i>Sorularım
          </nuxt-link>
          <nuxt-link tag="li" :to="{name:'index'}" class="pb-2">
            <i class="fas mr-2 fa-location-arrow"></i>Soru Ekle
          </nuxt-link>
          <li class="pb-2">
            <i class="fas mr-2 fa-location-arrow"></i>Lorem ipsum
          </li>
          <li class="pb-2">
            <i class="fas mr-2 fa-location-arrow"></i>Lorem ipsum
          </li>
          <li><i class="fas mr-2 fa-location-arrow"></i>Lorem ipsum</li>
        </ul>
      </div>
    </div>
    <div class="side-table" id="">
      <div
        class="d-flex header justify-content-between align-items-center px-3 py-2"
      >
        <div class="table-inf">
          <i class="fas fa-user-friends"></i>
          <span class="title"></span>
        </div>
        <div class="more">
          <img width="20" src="@/assets/icons/menu.svg" alt="" />
        </div>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      signedInUser: "auth/signedInUser",
    }),
  },
  methods:{
  }
};
</script>

<style scoped>
.side-table-group {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: sticky;
  top:15px
}

.content ul {
  list-style: none;
}
.content ul li {
  cursor: pointer;
  transition: 0.3s;
  color: var(--base-text-grey);
  font-size: 18px;
}
.content ul li i {
  color: var(--dark-blue);
}
.content ul li:hover {
  transform: translateX(10px);
}
.side-table-group,
.header {
  background: var(--light-blue) !important;
}

.content {
  min-height: 150px;
}

.header {
  border-top: 1px solid var(--border-grey);
  border-bottom: 1px solid var(--border-grey);
}

.table-inf i {
  color: var(--base-text-grey);
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: var(--base-text-grey);
}
</style>
