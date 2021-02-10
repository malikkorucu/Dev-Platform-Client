<template>
  <div>
    <QuestionCard v-for="que in questions" :key="que.shortId" :question="que"/>
  </div>
</template>

<script>
import Header from "../components/common/header";
import QuestionCard from "../components/Question/questionCard";
import sideTable from "../components/common/sideTable";
import {mapGetters} from 'vuex'

export default {
  layout:"sideTableLayout",
  components: {
    Header,
    QuestionCard,
    appSideTable: sideTable,
  },
  computed:{
    ...mapGetters({
      questions:'que_ans/questions'
    })
  },
  fetch({store}){
    return store.dispatch('que_ans/getAllQuestions')
  }
};
</script>

<style>

</style>
