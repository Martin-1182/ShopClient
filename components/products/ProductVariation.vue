<template>
  <div>
    <label class="block text-gray-800 mb-1">{{ type }}</label>
    <div class="relative inline-flex mb-3">
      <svg
        class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fill-rule="nonzero"
        />
      </svg>
      <select
        :value="selectedVariationId"
        @change="changed($event, type)"
        class="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
      >
        <option value="">Please choose</option>
        <option
          v-for="variation in variations"
          :key="variation.id"
          :value="variation.id"
          :disabled="!variation.in_stock"
        >
          {{ variation.name }}

          <template v-if="variation.price_varies">
            ({{ variation.price }})
          </template>

           <template v-if="!variation.in_stock">
            (out of stock)
          </template>
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    variations: {
      required: true,
      type: Array
    },
    value: {
      required: true,
      default: ""
    }
  },

  computed: {
    selectedVariationId() {
      if (!this.findVariation(this.value.id)) {
        return "";
      }

      return this.value.id;
    }
  },

  methods: {
    changed(event, type) {
      this.$emit("input", this.findVariation(event.target.value));
    },
    findVariation(id) {
      let variation = this.variations.find(v => v.id == id);

      if (typeof variation === "undefined") {
        return null;
      }

      return variation;
    }
  }
};
</script>

<style lang="scss" scoped></style>
