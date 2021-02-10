<template>
  <div :class="{ solved: question.isSolved }" class="question-card my-3">
    <header class="d-flex align-items-center py-1 pl-3">
      <span
        v-if="question.isSolved"
        class="icon-solved d-inline-block p-2 d-flex justify-content-center align-items-center"
      >
        <i class="fas fa-check text-white"></i>
      </span>
      <span
        v-else
        class="icon d-inline-block d-flex justify-content-center align-items-center"
      >
        <i
          style="font-size: 34px"
          class="fas fa-question-circle text-white"
        ></i>
        <span class="que pl-3">{{ question.title }}</span>
        <app-button
          @click.native="goToEdit()"
          v-if="$route.name == 'username'"
          class="order-btn"
          type="medium secondary-ghost"
          icon="fas fa-pencil-alt"
          title="Düzenle"
        ></app-button>
      </span>
    </header>
    <div class="content">
      <div class="user-info d-flex justify-content-between align-items-center">
        <span class="user d-flex align-items-center">
          <img
            width="50"
            ref="img"
            height="50"
            class="img"
            style="border-radius: 50%"
            src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
          />
          <span class="text pl-2 font-weight-bold"
            >{{ question.user.name }} {{ question.user.surname }} <span>-</span
            ><small class="ml-1">@{{ question.user.username }}</small></span
          >
        </span>
        <span class="createdAt">
          {{ question.createdDate | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
        </span>
      </div>

      <div
        ref="queContent"
        :class="{ 'que-hidden-content': question.text.length > 200 }"
        class="my-4"
      >
        <TuiEditorViewer style="font-size: 25px" :value="question.text" />
        <nuxt-link
          v-if="question.text.length > 200"
          tag="div"
          :to="{
            name: 'question-slug-questionId',
            params: { slug: question.slug, questionId: question.shortId },
          }"
          @click="
            getSingleQuestion({
              slug: question.slug,
              shortId: question.shortId,
            })
          "
          class="read-more"
        >
          <img width="80" src="@/assets/icons/more-2.svg" alt="" />
        </nuxt-link>
      </div>

      <div class="badge-list">
        <app-badge
          class="mr-3"
          v-for="keyword in question.keywords"
          :key="keyword"
          :title="keyword"
        ></app-badge>
      </div>

      <footer class="d-flex justify-content-between align-items-end">
        <div class="que-info d-flex">
          <span class="answers pr-3 d-flex py-2 align-items-center">
            <strong class="count">2</strong>
            <i class="fas fa-circle px-1"></i> Cevap
          </span>
          <span class="answers pr-3 d-flex py-2 align-items-center">
            <strong class="count">2</strong>
            <i class="fas fa-circle px-1"></i> Takipçi
          </span>
          <span class="answers pr-3 d-flex py-2 align-items-center">
            <strong class="count">2</strong>
            <i class="fas fa-circle px-1"></i> Yorum
          </span>
        </div>
        <div class="action-btns d-flex">
          <app-button
            icon="far fa-eye"
            overview="izle"
            type="ghost small"
          ></app-button>
          <app-button
            class="ml-2"
            icon="fas fa-arrow-right"
            overview="soruya git"
            type="primary small"
            @click.native="
              goToQuestion({
                slug: question.slug,
                shortId: question.shortId,
              })
            "
          >
          </app-button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import badge from "@/components/toolbox/badge";
import button from "@/components/toolbox/button";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    appBadge: badge,
    appButton: button,
  },
  props: {
    question: {
      required: true,
    },
  },
  data() {
    return {
      keywords: ["javascript", "python", "C++"],
    };
  },
  computed: {
    ...mapGetters({
      signedInUser: "auth/signedInUser",
    }),
  },
  methods: {
    ...mapActions({
      getSingleQuestion: "que_ans/getSingleQuestion",
    }),
    goToQuestion({ slug, shortId }) {
      this.$router.push({
        name: "question-slug-questionId",
        params: { slug: slug, questionId: shortId },
      });
    },
    goToEdit() {
      if (this.$route.name !== "username") {
        this.$router.push({
          name: "username",
          params: { username: this.signedInUser.username },
        });
      } else {
      }
    },
    mounted(){
       console.log(this.$route);
       window.scrollTo(0, 0);
    }
  },
};
</script>

<style scoped>
.question-card {
  border-radius: 5px;
  box-shadow: 0 0 10px 2px rgba(109, 109, 109, 0.3);
}

.solved {
  background: var(--success-bg);
}

.order-btn {
  position: absolute;
  right: 2px;
}

.que-hidden-content {
  max-height: 350px;
  overflow-y: hidden;
  position: relative;
  transition: 1s;
}
.read-more {
  position: absolute;
  z-index: 5;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  bottom: 0;
  color: white;
  text-align: center;
}
.read-more:hover {
  color: var(--border-grey);
}
.content {
  padding: 20px 20px;
}

header {
  background: var(--dark-blue);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-right: 150px;
  position: relative;
}

.que-info .answers i {
  font-size: 7px;
  color: var(--base-text-grey);
}

.answers {
  color: var(--base-text-grey);
  font-size: 18px;
}

.count {
  color: var(--base-grey);
}

.que {
  color: var(--main-bg-color);
  font-size: 1.5rem;
}

.user {
  color: var(--base-text-grey);
}

.icon-solved {
  background: var(--success-color-secondary);
  border-radius: 50%;
  height: 35px;
  width: 35px;
}

footer {
  flex-wrap: wrap;
}

@media (max-width: 960px) {
  .content {
    padding: 10px !important;
  }
  footer {
    justify-content: flex-end !important;
  }
}
</style>
