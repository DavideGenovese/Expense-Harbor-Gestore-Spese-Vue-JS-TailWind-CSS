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
  <ListCard :list="dataList" />
</template>
