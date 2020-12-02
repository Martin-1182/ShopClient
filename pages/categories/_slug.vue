<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-1 overflow-hidden">
        <div
          v-for="product in products"
          :key="product.slug"
          class="my-1 px-1 w-full overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
        >
          <Product :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Product from "@/components/products/Product";

export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    Product
  },
  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products?category=${params.slug}`);

    return {
      products: response.data
    };
  }
};
</script>
