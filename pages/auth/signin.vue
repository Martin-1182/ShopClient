<template>
  <div>
    <section class="py-8">
      <div class="w-full max-w-sm mx-auto">
        <form @submit.prevent="signin">
          <div class="mb-4">
            <input
              class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="text"
              placeholder="Email"
              v-model="form.email"
            />
          </div>
          <div class="mb-4">
            <input
              class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="password"
              placeholder="Password"
              v-model="form.password"
            />
          </div>
          <div class="mb-4"></div>
          <div class="mb-4">
            <button
              class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signin () {
      await this.$auth.loginWith('local', {
        data: this.form
      })

      this.$router.replace({
        name: 'index'
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
