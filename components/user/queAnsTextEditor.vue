<template>
  <div
    id="top"
    :class="{ 'modal-editor': type === 'answer' && modal }"
    class="focus"
  >
    <div class="inputs-container p-3 mb-3">
      <div class="close-btn d-flex justify-content-end">
        <i class="fas fa-times pb-2"></i>
      </div>
      <input
        v-if="type === 'question'"
        v-model="title"
        type="text"
        class="w-100 px-2 py-2 mb-3 title-input"
        placeholder="Lütfen soruya ait ana başlığı giriniz ..."
        id=""
      />
      <TuiEditor
        mode="markdown"
        preview-style="horizontal"
        height="350px"
        v-model="content"
      />
      <div v-if="type !== 'answer'" class="keywords-container d-flex py-3">
        <input
          type="text"
          @keypress.enter="addKeyword()"
          class="w-100 mr-3 px-3 py-2"
          placeholder="anahtar sözcükler..."
          v-model="keyword"
        />
        <app-button
          @click.native="addKeyword()"
          type="medium primary"
          icon="fas fa-plus"
        ></app-button>
      </div>
      <div v-if="keywords.length > 0" class="keywords-area mb-3 p-3">
        <span
          class="px-2 badge-container d-inline-block my-1"
          v-for="keyword in keywords"
          :key="keyword"
        >
          <app-badge
            @click.native="removeBadge(keyword)"
            class="badge"
            :title="keyword"
          ></app-badge>
        </span>
      </div>
      <app-button
        @click.native="sendData()"
        type="ghost big block"
        class="mt-2"
        :title="type == 'question' ? 'Yeni Soru Ekle' : 'Yeni Cevap Ekle'"
      ></app-button>
    </div>
  </div>
</template>

<script>
import button from "../toolbox/button";
import badge from "../toolbox/badge";
import { mapGetters } from "vuex";

export default {
  scrollToTop: true,
  components: {
    appButton: button,
    appBadge: badge,
  },
  props: ["type", "modal"],
  data() {
    return {
      content: "",
      title: "",
      keyword: "",
      keywords: [],
    };
  },
  computed: {
    ...mapGetters({
      singleQuestion: "que_ans/singleQuestion",
    }),
  },
  methods: {
    sendData() {
      let data;

      if (this.type == "question") {
        data = {
          title: this.title,
          text: this.content,
          keywords: this.keywords,
        };
        this.$store.dispatch("que_ans/addNewQuestion", data);
      } else {
        data = {
          questionId: this.singleQuestion._id,
          text: this.content,
        };
        this.$store.dispatch("que_ans/addAnswer", data);
      }

      this.keywords = [];
      this.title = "";
      this.content = "";
    },
    addKeyword() {
      this.keywords.push(this.keyword);
      this.keyword = "";
    },
    closeModal() {
      const elem = document.querySelector(".modal-editor");

      window.addEventListener("click", (e) => {
        if (this.modal == true && e.target.classList.contains("modal-editor")) {
          this.modal = false;
        }
      });
    },
    removeBadge(keyword) {
      this.keywords = this.keywords.filter((el) => el !== keyword);
    },
  },
  mounted() {
    this.closeModal();
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.inputs-container {
  box-shadow: 0 0 10px 2px rgba(109, 109, 109, 0.3);
  transition: 1s ease all;
}
/*.modal-editor.focus {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  transition: 1s ease all;
}*/
/*.modal-editor.focus .inputs-container {
  background: rgb(255, 255, 255);
  box-shadow:0 0 50px 10px rgba(255,255,255,0.5);
  width: 750px;
  position: absolute;
  left: 50%;
  top: 10%;
  border:2px solid var(--border-grey);
  border-radius: 10px;;
  transform: translateX(-50%) !important;
}*/

.title-input {
  border: 1px solid var(--border-grey);
  outline: none !important;
}
.keywords-area {
  background: rgb(247, 247, 227);
  border-radius: 7px;
  border: 1px solid var(--border-grey);
}
.badge {
  cursor: pointer;
}
.badge:hover {
  color: rgb(255, 99, 99);
}
</style>