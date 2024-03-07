<script>
import foto from "@/assets/foto.jpg";

export default {
  data() {
    return {
      logo: foto,
      hamburger: false,
    };
  },
  methods: {
    setHamburgher() {
      this.hamburger = !this.hamburger;
    },
  },
};
</script>

<template>
  <nav class="flex justify-between items-center bg-[#111827]">
    <div>
      <img
        :src="logo"
        class="h-auto max-w-[150px] p-4 rounded-full"
        alt="Logo"
      />
    </div>
    <div>
      <span class="text-4xl font-bold text-white text-center leading-4"
        >Gestione Spesa</span
      >
    </div>
    <div>
      <!-- KRABBY PATTY -->

      <div @click="setHamburgher" class="grid place-content-center">
        <div
          class="md:hidden w-12 h-2 m-2 bg-white rounded-full before:w-12 before:content-[''] before:absolute before:h-2 before:bg-white before:rounded-full before:-translate-y-4 before:transition-all before:duration-150 after:content-[''] after:absolute after:w-12 after:h-2 after:bg-white after:rounded-full after:translate-y-4 after:transition-all after:duration-150"
          :class="{
            'h-0 bg-white before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45':
              hamburger,
          }"
        ></div>
      </div>

      <div class="mt-3"></div>
      <ul
        class="hidden md:flex justify-center items-center p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <li>
          <router-link
            to="/"
            class="block py-2 px-3 text-white rounded md:hover:bg-transparent md:p-0"
            aria-current="page"
            exact-active-class="text-blue-700"
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="block py-2 px-10 text-white rounded md:hover:bg-transparent md:p-0"
            exact-active-class="text-blue-700"
            ><svg
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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link
            to="/list"
            class="block py-2 px-3 text-white rounded md:hover:bg-transparent md:p-0"
            exact-active-class="text-blue-700"
            ><svg
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
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="h-screen w-full hidden">
    <div id="navbar-hamburger">
      <ul
        class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      >
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
            aria-current="page"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >Pricing</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
