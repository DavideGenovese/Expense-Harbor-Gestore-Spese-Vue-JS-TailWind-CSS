<script>
import CreateItem from "./CreateItem.vue";
import EditItem from "./EditItem.vue";

export default {
  props: ["list"],
  data() {
    return {
      showEdit: false,
      showCreate: false,
      confirmDelete: false,
      confirm: false,
      itemToEdit: "",
    };
  },
  components: {
    CreateItem,
    EditItem,
  },

  methods: {
    createNew() {
      this.showCreate = !this.showCreate;
    },

    showDelete() {
      this.confirmDelete = !this.confirmDelete;
    },

    removeItem(id) {
      const index = this.list.findIndex((item) => item.id === id);
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
  },
};
</script>

<template>
  <CreateItem v-show="showCreate" />
  <EditItem v-show="showEdit" :item="itemToEdit"></EditItem>
  <div class="flex justify-end items-center">
    <button @click="createNew">
      <span v-if="!showCreate">Aggiungi Nuovo</span>
      <span v-else>Chiudi</span>
    </button>
  </div>

  <div class="mx-4 overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Data</th>
          <th scope="col" class="px-6 py-3">Categoria</th>
          <th scope="col" class="px-6 py-3">Descrizione</th>
          <th scope="col" class="px-6 py-3">Importo</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody v-if="list" v-for="item in list" :key="item.id">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.data }}
          </th>
          <td class="px-6 py-4">{{ item.categoria }}</td>
          <td class="px-6 py-4">{{ item.descrizione }}</td>
          <td class="px-6 py-4">€ {{ item.importo }}</td>
          <td class="px-6 py-4">
            <button
              @click="setEdit(item.id)"
              class="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              @click="showDelete"
              class="font-medium mr-4 text-red-600 dark:text-red-500 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>
        <div
          v-show="confirmDelete"
          tabindex="-1"
          class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                @click="showDelete"
                type="button"
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
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
                <h3
                  class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                >
                  Are you sure you want to delete?
                </h3>
                <button
                  @click="removeItem(item.id)"
                  data-modal-hide="popup-modal"
                  type="button"
                  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Yes, I'm sure
                </button>
                <button
                  @click="showDelete"
                  data-modal-hide="popup-modal"
                  type="button"
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </tbody>
    </table>
  </div>
</template>
