<template>
  <div class="text-gray-800 text-sm">
    <nav
      class="bg-gray-800 text-white px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center space-x-4">
        <nuxt-link :to="{}" class="text-white hover:text-gray-400">
          <svg
            class="w-8 fill-current mr-6"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </nuxt-link>
        <ul class="flex items-center font-semibold space-x-4">
          <template v-for="category in categories">
            <template v-if="category.children.length">
              <li :key="category.slug" @click="toggle()">
                <nuxt-link
                  :to="{
                    name: 'categories-slug',
                    params: { slug: category.slug }
                  }"
                  class="flex items-center hover:text-gray-400"
                >
                  {{ category.name }}
                  <svg
                    class="w-3 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </nuxt-link>
                <!-- Dropdown -->
                <div
                  class="z-50 absolute bg-gray-800 text-sm rounded w-auto mt-6 shadow-lg"
                  v-if="isOpen"
                >
                  <ul class="">
                    <li>
                      <nuxt-link
                        :to="{
                          name: 'categories-slug',
                          params: { slug: child.slug }
                        }"
                        class="hover:bg-gray-700 px-3 py-3 flex items-center rounded"
                        v-for="child in category.children"
                        :key="child.slug"
                      >
                        {{ child.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <!-- End Dropdown -->
              </li>
            </template>
            <template v-else>
              <nuxt-link
                :key="category.slug"
                :to="{
                  name: 'categories-slug',
                  params: { slug: category.slug }
                }"
              >
                {{ category.name }}
              </nuxt-link>
            </template>

            <template> </template>
          </template>
        </ul>
      </div>
      <div class="flex items-center space-x-4 text-white">
        <nuxt-link :to="{}" class="relative hover:text-gray-400">
          <svg
            class="w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div
            class="bg-blue-600 rounded-full w-2 h-2 absolute top-0 right-0"
          ></div>
        </nuxt-link>
        <template v-if="!$auth.loggedIn">
          <nuxt-link
         class="flex items-center hover:text-gray-400 font-semibold"
         :to="{name: 'auth-signin'}">Sign in
          </nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
          :to="{}"
          class="flex items-center hover:text-gray-400 font-semibold"
        >
          Orders
        </nuxt-link>
        <nuxt-link :to="{}" class="flex items-center hover:text-gray-400">
          <div class="flex items-center hover:text-gray-400 font-semibold pr-2">
            {{$auth.user.name}}
            </div>
          <img
            alt="@Martin-1182"
            src="https://avatars0.githubusercontent.com/u/58297666?s=60&amp;v=4"
            class="w-5 h-5 rounded-full"
          />
        </nuxt-link>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    ...mapGetters({
      categories: "categories"
    })
  }
};
</script>
