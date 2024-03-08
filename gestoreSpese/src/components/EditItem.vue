<script>
export default {
  props: ["item"],
  methods: {
    saveChange(id) {
      const dataList = JSON.parse(localStorage.getItem("item")) ?? [];
      const index = dataList.findIndex((item) => item.id === id);
      if (index !== -1) {
        dataList[index] = this.item;
        localStorage.setItem("item", JSON.stringify(dataList));
      }
    },
  },
};
</script>

<template>
  <transition name="bounce">
    <div class="p-4 mx-4 rounded-lg shadow bg-gray-800 sm:px-5 sm:py-2">
      <!-- Modal body -->
      <form>
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
              v-model="item.data"
              required
            />
          </div>
          <div>
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-white"
              >Categoria</label
            >
            <select
              class="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              v-model="item.categoria"
              required
            >
              <option selected=""></option>
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
              v-model="item.descrizione"
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
              v-model="item.importo"
              required=""
            />
          </div>
        </div>
        <div class="flex justify-end">
          <a
            href="/list"
            @click="saveChange(item.id)"
            type="submit"
            class="font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-600 focus:ring-green-800"
          >
            Save
          </a>
          <a
            href="/list"
            type="submit"
            class="font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-600 focus:ring-red-800"
          >
            Delete
          </a>
        </div>
      </form>
    </div>
  </transition>
</template>
