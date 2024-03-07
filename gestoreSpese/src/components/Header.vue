<script>
import logo from "@/assets/logo.png";

export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("item")) ?? [],
      logo: logo,
      hamburger: false,
    };
  },
  methods: {
    setHamburger() {
      this.hamburger = !this.hamburger;
    },
  },
};
</script>

<template>
  <nav class="flex justify-between items-center p-4 bg-[#111827]">
    <router-link to="/">
      <div>
        <img :src="logo" class="h-auto max-w-[150px] rounded-full" alt="Logo" />
      </div>
    </router-link>
    <div>
      <router-link to="/">
        <span class=" text-3xl md:text-4xl font-bold text-white text-center"
          >Gestione Spesa</span
        >
      </router-link>
    </div>
    <div class="flex justify-center items-center">
      <!-- KRABBY PATTY -->

      <button
        class="text-white w-10 h-10 relative focus:outline-none md:hidden"
        @click="setHamburger"
      >
        <div
          class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'rotate-45': hamburger, ' -translate-y-1.5': !hamburger }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'opacity-0': hamburger }"
          ></span>
          <span
            aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ '-rotate-45': hamburger, ' translate-y-1.5': !hamburger }"
          ></span>
        </div>
      </button>

      <div class="mt-3"></div>
      <ul
        class="hidden md:flex justify-center items-center text-white p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <li>
          <router-link
            to="/"
            class="block py-2 px-3 rounded md:hover:bg-transparent md:p-0"
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
            class="block py-2 px-10 rounded md:hover:bg-transparent md:p-0"
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
            class="block py-2 px-3 rounded md:hover:bg-transparent md:p-0"
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
        <li>
          <router-link to="/chart" exact-active-class="text-blue-700">
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
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
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
