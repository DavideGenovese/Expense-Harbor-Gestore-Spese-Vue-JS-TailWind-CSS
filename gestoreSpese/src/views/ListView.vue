<script>
import ListCard from "../components/ListCard.vue";
export default {
  components: {
    ListCard,
  },

  data() {
    return {
      dataList: JSON.parse(localStorage.getItem("item")) ?? [],
    };
  },
};
</script>

<template>
  <div class="h-screen">
    <ListCard :list="dataList" />
  </div>
</template>
