<script>
export default {
  data() {
    return {
      item: [],
      id: "",
      data: "",
      categoria: "",
      descrizione: "",
      importo: "",
    };
  },
  methods: {
    pushData() {
      this.item = JSON.parse(localStorage.getItem("item")) ?? [];
      this.item.push({
        id: this.item.length,
        data: this.data,
        categoria: this.categoria,
        descrizione: this.descrizione,
        importo: this.importo,
      });
      localStorage.setItem("item", JSON.stringify(this.item));
    },
  },
};
</script>

<template>
  <div class="rounded-lg shadow bg-gray-800 mx-4 sm:px-5 sm:py-2">
    <!-- Modal body -->
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label for="date" class="block mb-2 text-sm font-medium text-white"
          >Data</label
        >
        <input
          type="date"
          name="date"
          class="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          placeholder="Type date"
          v-model="data"
          required
        />
      </div>
      <div>
        <label for="category" class="block mb-2 text-sm font-medium text-white"
          >Categoria</label
        >
        <select
          class="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          v-model="categoria"
          required
        >
          <option selected="">Select category</option>
          <option value="Casa">Casa</option>
          <option value="Abbigliamento">Abbigliamento</option>
          <option value="Animali">Animali</option>
          <option value="Auto">Auto</option>
          <option value="Bollette">Bollette</option>
          <option value="Comunicazioni">Comunicazioni</option>
          <option value="Igiene">Igiene</option>
          <option value="Intrattenimento">Intrattenimento</option>
          <option value="Regali">Regali</option>
          <option value="Ristorante">Ristorante</option>
          <option value="Salute">Salute</option>
          <option value="Sport">Sport</option>
          <option value="Taxi">Taxi</option>
          <option value="Auto">Auto</option>
          <option value="Trasporti">Trasporti</option>
        </select>
      </div>
      <div>
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-white"
          >Descrizione</label
        >
        <input
          class="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          placeholder="Write product description here"
          v-model="descrizione"
          required
        />
      </div>
      <div>
        <label for="price" class="block mb-2 text-sm font-medium text-white"
          >Importo</label
        >
        <input
          type="number"
          name="price"
          class="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          placeholder="$2999"
          v-model="importo"
          required=""
        />
      </div>
    </div>
    <div class="flex justify-end">
      <a
        href="/list"
        @click="pushData"
        class="font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-600 focus:ring-green-800"
      >
        Aggiungi
      </a>
    </div>
  </div>
</template>
