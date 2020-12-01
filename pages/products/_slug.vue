<template>
  <div class="container mx-auto">
    <section class="py-12 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="lg:w-1/2 px-4 mb-4 lg:mb-0"><img class="rounded shadow" src="http://via.placeholder.com/620x620" alt="Product name"></div>
        <div class="lg:w-1/2 px-4">
          <h2 class="text-4xl mb-4 font-semibold font-heading">{{ product.name }}</h2>
          <p
            v-if="product.description"
            class="mb-6 text-gray-400 leading-relaxed"
            >{{ product.description}}</p>
          <div class="mb-6">
            <button class="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-400 rounded-full"></button>
            <button class="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-300 rounded-full"></button>
            <button class="inline-flex items-center justify-center h-8 w-8 mr-2 bg-gray-100 rounded-full"></button>
          </div>
          <div class="flex mb-6">
            <span class="text-2xl">$10</span>
            <div class="flex flex-wrap ml-4">
              <div class="w-1/2">
                <input class="appearance-none block w-full py-2 px-4 leading-snug text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none focus:outline-none" type="number" value="1">
              </div>
              <div class="w-1/2">
                <button class="inline-block w-full py-3 px-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded md:rounded-l-none">Buy</button>
              </div>
            </div>
          </div>
          <div class="pt-4 border-t"><a class="text-indigo-600 hover:underline" href="#">Add to favorites</a></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: null
      }
    },

    async asyncData({ params, app}) {
       let response = await app.$axios.$get(`products/${params.slug}`)

       return {
         product: response.data
       }
    }

  }
</script>


