<script>
import CreateItem from "./CreateItem.vue";
import EditItem from "./EditItem.vue";
import { jsPDF } from "jspdf";
import lunr from "lunr";
import html2canvas from "html2canvas";
import Papa from "papaparse";

export default {
  props: ["list", "totale"],
  data() {
    return {
      showEdit: false,
      showCreate: false,
      confirmDelete: false,
      filter: false,
      menu: false,
      filteredList: [],
      filteredSomma: 0,
      categoria: "Seleziona Categoria",
      itemToDelete: "",
      itemToEdit: "",
      idx: null, // Aggiungi  per memorizzare l'indice Lunr.js
      searchQuery: "", // Aggiungi  per memorizzare la query di ricerca
    };
  },
  components: {
    CreateItem,
    EditItem,
  },

  mounted() {
    this.createSearchIndex(); // Chiama la funzione per creare l'indice di ricerca al montaggio del componente
  },

  methods: {
    createNew() {
      this.showCreate = !this.showCreate;
    },

    showMenu() {
      this.menu = !this.menu;
    },

    setCategoria(categoria) {
      this.categoria = categoria;
      this.filter = true;
      this.menu = !this.menu;
      this.filteredList = this.list.filter(
        (element) => element.categoria == this.categoria
      );
      this.filteredSomma = 0;
      this.filteredList.forEach((element) => {
        this.filteredSomma += element.importo;
      });
      console.log(this.filteredSomma);
    },

    resetCategoria() {
      this.categoria = "Seleziona Categoria";
      this.filter = false;
    },

    showDelete(id) {
      this.confirmDelete = !this.confirmDelete;
      this.itemToDelete = id;
    },

    removeItem() {
      const index = this.list.findIndex(
        (item) => item.id === this.itemToDelete
      );
      if (index !== -1) {
        this.list.splice(index, 1);
        localStorage.setItem("item", JSON.stringify(this.list));
        this.confirmDelete = !this.confirmDelete;
      }
    },

    setEdit(id) {
      this.showEdit = !this.showEdit;
      const index = this.list.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.itemToEdit = this.list[index];
      }
    },

    exportToPDF() {
      const element = this.$refs.tableToExport;
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "pt",
          format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("spese.pdf");
      });
    },

    createSearchIndex() {
      let lista = this.list;
      this.idx = lunr(function () {
        this.ref("id");
        this.field("categoria");
        this.field("descrizione");
        this.field("importo");
        lista.forEach((item) => {
          this.add(item);
        });
      });
    },

    searchItems() {
      if (!this.idx || !this.searchQuery) {
        this.filter = false;
        return;
      }
      this.filteredList = this.idx
        .search(this.searchQuery)
        .map(({ ref }) => this.list.find((item) => item.id.toString() === ref));
      this.filteredSomma = 0;
      this.filteredList.forEach((element) => {
        this.filteredSomma += element.importo;
      });
      this.filter = true; // Attiva il filtro per mostrare i risultati della ricerca
    },

    exportToCSVWithPapaParse() {
      const csv = Papa.unparse(this.list);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "spese.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<template>
  <CreateItem v-show="showCreate" />
  <EditItem v-show="showEdit" :item="itemToEdit"></EditItem>
  <div class="relative flex justify-between items-center sm:px-5 sm:pt-2">
    <div class="flex gap-4">
      <div>
        <button
          @click="showMenu"
          data-dropdown-toggle="dropdown"
          class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-gray-800 hover:bg-gray-700 focus:ring-gray-300"
          type="button"
        >
          {{ categoria }}
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <a
          v-show="filter"
          class="text-white cursor-pointer"
          @click="resetCategoria"
        >
          Reset
        </a>
      </div>

      <input
        v-model="searchQuery"
        @input="searchItems"
        placeholder="Ricerca"
        class="block h-auto w-50 rounded-lg p-2 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    <button
      @click="createNew"
      type="button"
      class="text-white m-4 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      <span v-if="!showCreate">Aggiungi Nuovo</span> <span v-else>Chiudi</span>
    </button>
  </div>

  <!-- Menu dropdown -->
  <div v-show="menu" class="absolute sm:px-5 sm:pb-2">
    <div
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="item in list" :key="item.categoria">
          <a
            @click="setCategoria(item.categoria)"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >{{ item.categoria }}</a
          >
        </li>
      </ul>
    </div>
  </div>

  <div class="mx-4 overflow-x-auto shadow-md sm:rounded-lg">
    <table
      ref="tableToExport"
      class="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400"
    >
      <thead class="text-sm uppercase bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Data</th>
          <th scope="col" class="px-6 py-3">Categoria</th>
          <th scope="col" class="px-6 py-3">Descrizione</th>
          <th scope="col" class="px-6 py-3">Importo</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody v-if="list && !filter" v-for="item in list" :key="item.id">
        <tr class="border-b bg-gray-800 border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-normal whitespace-nowrap text-white text-[17px]"
          >
            {{ item.data }}
          </th>
          <td class="px-6 py-4 text-[17px] text-white">{{ item.categoria }}</td>
          <td class="px-6 py-4 text-[17px] text-white">
            {{ item.descrizione }}
          </td>
          <td class="px-6 py-4 text-[17px] text-white">
            € {{ parseFloat(item.importo).toFixed(2) }}
          </td>
          <td class="px-6 py-4 text-[17px] text-white">
            <button
              @click="setEdit(item.id)"
              class="font-medium mr-4 text-blue-500 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              @click="showDelete(item.id)"
              class="font-medium mr-4 text-red-500 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>

            <div
              v-show="confirmDelete"
              class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative rounded-lg shadow bg-gray-700">
                  <button
                    @click="showDelete"
                    type="button"
                    class="absolute top-3 end-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-4 md:p-5 text-center">
                    <svg
                      class="mx-auto mb-4 w-12 h-12 text-gray-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-400">
                      Are you sure you want to delete?
                    </h3>
                    <button
                      @click="removeItem"
                      type="button"
                      class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      @click="showDelete"
                      data-modal-hide="popup-modal"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>

      <tbody v-if="filter" v-for="item in filteredList" :key="item.id">
        <tr class="border-b bg-gray-800 border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-normal whitespace-nowrap text-white text-[17px]"
          >
            {{ item.data }}
          </th>
          <td class="px-6 py-4 text-[17px] text-white">{{ item.categoria }}</td>
          <td class="px-6 py-4 text-[17px] text-white">
            {{ item.descrizione }}
          </td>
          <td class="px-6 py-4 text-[17px] text-white">
            € {{ parseFloat(item.importo).toFixed(2) }}
          </td>
          <td class="px-6 py-4 text-[17px] text-white">
            <button
              @click="setEdit(item.id)"
              class="font-medium mr-4 text-blue-500 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              @click="showDelete(item.id)"
              class="font-medium mr-4 text-red-500 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>

            <div
              v-show="confirmDelete"
              class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative rounded-lg shadow bg-gray-700">
                  <button
                    @click="showDelete"
                    type="button"
                    class="absolute top-3 end-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                    data-modal-hide="popup-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-4 md:p-5 text-center">
                    <svg
                      class="mx-auto mb-4 w-12 h-12 text-gray-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-400">
                      Are you sure you want to delete?
                    </h3>
                    <button
                      @click="removeItem"
                      type="button"
                      class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      @click="showDelete"
                      data-modal-hide="popup-modal"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-between p-4 min-w-8 mx-auto">
    <div>
      <button
        @click="exportToPDF"
        type="button"
        class="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Esporta in PDF
      </button>
      <button
        @click="exportToCSVWithPapaParse"
        type="button"
        class="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Esporta in CSV
      </button>
    </div>
    <div
      v-show="filter"
      class="my-4 text-white focus:ring-4 focus:outline-none font-medium rounded-lg shadow-2xl text-sm px-5 py-2.5 text-center flex justify-center items-center bg-gray-800 hover:bg-gray-700 focus:ring-gray-800"
    >
      {{ "Spesa Filtrata = € " + parseFloat(filteredSomma).toFixed(2) }}
    </div>
    <div
      v-show="!filter"
      class="my-4 text-white focus:ring-4 focus:outline-none font-medium rounded-lg shadow-2xl text-sm px-5 py-2.5 text-center flex justify-center items-center bg-gray-800 hover:bg-gray-700 focus:ring-gray-800"
    >
      {{ "Spesa Totale " + "= " + "€ " + parseFloat(totale).toFixed(2) }}
    </div>
  </div>
</template>
