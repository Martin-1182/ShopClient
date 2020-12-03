<template>
  <div class="container mx-auto">
    <section class="py-12 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="lg:w-1/2 px-4 mb-4 lg:mb-0">
          <img
            class="rounded shadow"
            src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=762&q=80"
            alt="Product name"
          />
        </div>
        <div class="lg:w-1/2 px-4">
        <span
        v-if="!product.in_stock"
        class="bg-red-500 text-white text-xs px-2 py-1 inline-block rounded-full uppercase font-semibold tracking-wide">Out of Stock</span>
          <h2 class="text-4xl mb-4 font-semibold font-heading">
            {{ product.name }}
          </h2>
          <p
            v-if="product.description"
            class="mb-6 text-gray-400 leading-relaxed"
          >
            {{ product.description }}
          </p>
          <div class="mb-6">
            <form>
              <ProductVariation
                v-for="(variations, type) in product.variations"
                :type="type"
                :variations="variations"
                :key="type"
                v-model="form.variation"
              />
            </form>
          </div>
          <div
          v-if="form.variation"
          class="flex mb-6">
            <span class="text-2xl">{{ product.price }}</span>
            <form class="flex flex-wrap ml-4">
              <div class="w-1/2">
                <input
                  class="appearance-none block w-full py-2 px-4 leading-snug text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none focus:outline-none"
                  type="number"
                  value="1"
                />
              </div>
              <div class="w-1/2">
                <button
                  class="inline-block w-full py-3 px-4 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded md:rounded-l-none"
                >
                  Buy
                </button>
              </div>
            </form>
          </div>
          <div class="pt-4 border-t">
            <a class="text-indigo-600 hover:underline" href="#"
              >Add to favorites</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductVariation from "@/components/products/ProductVariation";

export default {
  data() {
    return {
      product: null,
      form: {
        variation: '',
        quantity: 1
      }
    }
  },
  components: {
    ProductVariation
  },

  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products/${params.slug}`);

    return {
      product: response.data
    };
  }
};
</script>
