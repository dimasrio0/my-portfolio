<template>
  <nav>
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7 px-3 md:px-0"
    >
      <a href="#" class="flex items-center">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Dimas Rio</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <a
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text- md:p-0 dark:text-white md:dark:text-white dark:bg-gray-700 md:dark:bg-transparent"
              href="#hero"
              ><span class="text-[#C778DD]">#</span> Home</a
            >
          </li>
          <li>
            <a
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#ABB2BF] md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              href="#project"
              ><span class="text-[#C778DD]">#</span> Works</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
