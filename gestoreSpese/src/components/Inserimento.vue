<template>
        <div class="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
    <!-- Modal body -->
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          for="date"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Data</label
        >
        <input
          type="date"
          name="date"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Type date"
          required=""
        />
      </div>
      <div>
        <label
          for="category"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Categoria</label>
          <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        >
          <option selected="">Select category</option>
          <option value="Casa">Casa</option>
          <option value="Abbigliamento">Abbigliamento</option>
          <option value="Animali">Animali</option>
          <option value="Auto">Auto</option>
          <option value="Collette">Bollette</option>
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
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Descrizione</label
        >
        <input
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Write product description here"/>
      </div>
      <div>
        <label
          for="price"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Importo</label
        >
        <input
          type="number"
          name="price"
          id="price"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="$2999"
          required=""
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button
        type="submit"
        class="text-black bg-blue-200 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Add new
      </button>
    </div>
  </div>
</template>
<script>
export default{ 
    data(){  
        return{  

        }
    },
    methods:{  
      
    }
}
</script>