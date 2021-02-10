<template>
  <div>
    <app-text-editor class="mt-3" type="question"></app-text-editor>
    <transition-group name="slide">
      <app-question-card
        v-for="que in questions"
        :question="que"
        :key="que.shortId"
      ></app-question-card>
    </transition-group>
  </div>
</template>

<script>
import questionCard from "@/components/Question/questionCard";
import textEditor from "@/components/user/queAnsTextEditor";
import { mapGetters } from "vuex";

export default {
  components: {
    appQuestionCard: questionCard,
    appTextEditor: textEditor,
  },
  computed: {
    ...mapGetters({
      questions: "que_ans/questions",
    }),
  },
  fetch({ store,route }) {
    console.log(route);
    return store.dispatch("que_ans/getQuestions");
  },
};
</script>

<style scoped>
</style>