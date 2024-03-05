<template>
        <div class="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
    <!-- Modal body -->
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          for="date"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Data</label>
        <input v-model="newItem.data"
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
          <select v-model="newItem.categoria"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
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
        <input v-model="newItem.descrizione"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Write product description here"/>
      </div>
      <div>
        <label
          for="price"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Importo</label
        >
        <input v-model="newItem.importo"
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
      <button type="submit" @click="addItem"
        class="text-black bg-blue-200 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Add new
      </button>
    </div>
    <div class="flex justify-end m-2">
      <button type="submit" @click="addItem"
        class="text-black bg-blue-200 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Edit
      </button>
    </div>
  </div>
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <!-- Start coding here -->
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Data</th>
            <th class="px-4 py-3">Descrizione</th>
            <th class="px-4 py-3">Categoria</th>
            <th class="px-4 py-3">Importo</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.data }}</td>
          <td>{{ item.descrizione }}</td>
          <td>{{ item.categoria }}</td>
          <td>{{ item.importo }}</td>
          <td><button @click="deleteItem(item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>

</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
export default{ 
    data(){  
        return{  
          items:[],
          newItem:{ 
            data:'',
            categoria:'',
            descrizione:'',
            importo:''
          }
        }
    },
    methods: {
  addItem() {
    const newItemWithId = { 
      id:this.items.length+1,
      ...this.newItem, }; 
    this.items.push(newItemWithId);
    
    localStorage.setItem('items', JSON.stringify(this.items));
    this.newItem = { data: '', categoria: '', descrizione: '', importo: '' };
  },
  deleteItem(itemId) {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
      
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
},
mounted() {
  if (localStorage.getItem('items')) {
    this.items = JSON.parse(localStorage.getItem('items'));
  }
}
}
</script>