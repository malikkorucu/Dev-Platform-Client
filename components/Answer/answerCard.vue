<template>
  <div class="answer-card d-flex px-3 py-2 mt-3 flex-column">
    <div
      class="user-info d-flex py-2 justify-content-between align-items-center"
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
        <span class="text pl-2 font-weight-bold"
          >{{ answer.user.name }} {{ answer.user.surname }} <span>-</span
          ><small class="ml-1">@{{ answer.user.username }}</small></span
        >
      </span>
      <span class="createdAt">
        {{answer.createdDate | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
      </span>
    </div>
    <div class="answer-text-content">
      <TuiEditorViewer style="font-size: 25px" :value="answer.text" />
    </div>
    <div class="btn-container d-flex justify-content-end">
      <a ref="goAnswer" class="d-none" href="#answer-text-editor"></a>
      <app-button
        class="ml-2 d-inline-block"
        icon="fas fa-reply"
        title="cevapla"
        type="ghost small"
        @click.native="$refs.goAnswer.click()"
      ></app-button>
      <span class="correct-btn ml-2">
        <i class="fas fa-check-double"></i>
        Doğru Cevap
      </span>
    </div>
  </div>
</template>

<script>
import button from "@/components/toolbox/button";

export default {
  components: {
    appButton: button,
  },
  props: {
    answer: {
      required: true,
    },
  },
};
</script>

<style scoped>
.answer-card {
  border: 1px solid var(--border-grey);
  border-left: 7px solid var(--base-grey);
}
.correct-btn {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border: 1px solid var(--success-color);
  border-radius: 5px;
  align-self: flex-start;
  background: var(--success-bg);
  color: var(--success-color);
  transition: 0.5s;
  cursor: pointer;
}

.correct-btn:hover {
  background: var(--success-color-secondary);
  color: var(--main-bg-color);
}
</style>