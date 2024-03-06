<script>
import ListCard from "../components/ListCard.vue";
export default {
  components: {
    ListCard,
  },

  data() {
    return {
      dataList: JSON.parse(localStorage.getItem("item")) ?? [],
      spesaTotale: 0,
    };
  },
  computed: {
    sommaTotale() {
      this.spesaTotale = 0;
      this.dataList.forEach((element) => {
        this.spesaTotale += element.importo;
      });
      return this.spesaTotale;
    },
  },
};
</script>

<template>
  <div class="bg-[#111827] h-screen">
    <ListCard :list="dataList" :totale="sommaTotale" />
  </div>
</template>
