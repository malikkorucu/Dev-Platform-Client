<template>
  <div class="single-question-page py-3">
    <div class="single-que-card" :class="{ solved: singleQuestion.isSolved }">
      <div class="question-content p-3">
        <div class="header d-flex align-items-center px-3 py-2">
          <span
            class="icon-solved d-inline-block p-2 d-flex justify-content-center align-items-center"
          >
            <i class="fas fa-check text-white"></i>
          </span>
          <h1 class="que-title m-0 pl-3">{{ singleQuestion.title }}</h1>
        </div>

        <div
          class="user-info d-flex py-3 px-1 justify-content-between align-items-center"
        >
          <span class="user d-flex align-items-center">
            <img
              width="50"
              ref="img"
              height="50"
              class="img"
              style="border-radius: 50%"
              src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640"
            />
            <spana class="text pl-2 font-weight-bold"
              >{{ singleQuestion.user.name }} {{ singleQuestion.user.surname }}
              <span>-</span
              ><small class="ml-1"
                >@{{ singleQuestion.user.username }}</small
              ></spana
            >
          </span>
          <span class="createdAt">
            {{
              singleQuestion.createdDate
                | moment("dddd, MMMM Do YYYY, h:mm:ss a")
            }}
          </span>
        </div>

        <div class="question-text mt-2">
          <TuiEditorViewer
            style="font-size: 25px"
            :value="singleQuestion.text"
          />
        </div>
        <div class="btn-container d-flex justify-content-end">
          <a ref="goAnswer" class="d-none" href="#answer-text-editor"></a>
          <app-button
            icon="far fa-eye"
            overview="izle"
            type="secondary small"
          ></app-button>
          <app-button
            class="ml-2 d-inline-block"
            icon="fas fa-reply"
            title="cevapla"
            type="ghost small"
            @click.native="goBottom()"
          ></app-button>
        </div>
      </div>
    </div>

    <div class="answers-container">
      <app-answer-card
        ref="text-editor"
        v-for="answer in answers"
        :key="answer._id"
        :answer="answer"
      ></app-answer-card>
    </div>

    <div id="answer-text-editor" class="mt-3">
      <app-text-editor :modal="answerModal" type="answer"></app-text-editor>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import button from "@/components/toolbox/button";
import textEditor from "@/components/user/queAnsTextEditor";
import answerCard from "@/components/Answer/answerCard";

export default {
  layout: "sideTableLayout",

  components: {
    appTextEditor: textEditor,
    appButton: button,
    appAnswerCard: answerCard,
  },
  data() {
    return {
      text: "",
      answerModal: false,
    };
  },
  methods: {
    goToAnswer() {
      this.$router.push({ id: "answer-text-editor" });
    },
    goBottom() {
      // setTimeout(() => {
      //   this.answerModal = !this.answerModal;
      // }, 600);

      this.answerModal = !this.answerModal;
      this.$refs.goAnswer.click();
    },
  },
  computed: {
    ...mapGetters({
      singleQuestion: "que_ans/singleQuestion",
      answers: "que_ans/answers",
    }),
  },

  async fetch({ store, route }) {
    const [getQuestion, getAnswer] = await Promise.all([
      store.dispatch("que_ans/getSingleQuestion", {
        shortId: route.params.questionId,
        slug: route.params.slug,
      }),
      store.dispatch("que_ans/getAnswersOfQuestion", {
        shortId: route.params.questionId,
        slug: route.params.slug,
      }),
    ]);

    return {
      getQuestion,
      getAnswer,
    };
  },
};
</script>

<style scoped>
.header {
  background: var(--dark-blue);
  color: var(--light-grey);
  border-radius: 7px;
}
.que-title {
  word-break: break-all;
}
.solved {
  background: var(--success-bg);
  box-shadow: 0 0 10px 2px rgba(46, 206, 24, 0.5);
}
.question-content {
  border: 1px solid var(--border-grey);
  border-bottom: 7px solid var(--main-orange);
  border-radius: 5px;
}

.icon-solved {
  background: var(--success-color-secondary);
  border-radius: 50%;
  height: 35px;
  width: 35px;
}
</style>