<template>
  <header class="header">
    <div
      class="custom-container "
    >
      <div class="content d-flex justify-content-between align-items-center">
        <span class="logo font-weight-bold">
          <Logo />
        </span>

        <div class="search-area d-flex">
          <div class="search-input px-2">
            <i class="fas fa-search"></i>
            <input class="search ml-2 w-100" placeholder="Search" />
          </div>
          <Button class="ml-3" title="Soru sor" type="primary big"></Button>
        </div>

        <div class="header-dropdowns">
          <HeaderButtons />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderButtons from "../toolbox/headerButtons";
import Button from "../toolbox/button";
import Logo from "../Logo";

export default {
  components: {
    HeaderButtons,
    Button,
    Logo,
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid var(--border-grey);
}

.fa-search {
  color: var(--base-text-grey);
}

.content {
  border-right:1px solid var(--border-grey);
}
.search-input {
  border: 1px solid var(--border-grey);
  display: flex;
  width: 350px;
  align-items: center;
}

.search {
  border: none;
  outline: none;
}

@media (max-width: 960px) {
  .search-area {
    display: none !important;
  }

  header {
    padding-left: 10px !important;
  }
}
</style>
