<template>
  <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
    <nuxt-link
      :to="link"
      style="background-image: url(https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=762&q=80"
      class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
    >
    </nuxt-link>
    <div
      class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden"
    >
      <div
        class="py-2 text-center font-bold uppercase tracking-wide text-gray-800"
      >
        <nuxt-link :to="link">{{ product.name }}</nuxt-link>
      </div>
      <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
        <h1 class="text-gray-800 font-bold ">{{ product.price }}</h1>
        <button
          class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  computed: {
    link() {
      return {
        name: "products-slug",
        params: {
          slug: this.product.slug
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
