<script lang="ts" setup>
import { ref } from 'vue'

const username = ref<string>('')
const password = ref<string>('')

function onSubmit(): void {
  console.log('username: ' + username.value, 'password: ' + password.value)
}
</script>

<template>
  <div class="mx-auto px-4">
    <h1 class="text-3xl mb-10">Login</h1>

    <form @submit.prevent="onSubmit">
      <div>
        <p class="text-lg mb-1">Username</p>
        <input
          type="text"
          class="form-input px-4 py-3 rounded-full text-black"
          v-model="username"
        />
      </div>

      <div class="mt-3">
        <p class="text-lg mb-1">Password</p>
        <input
          type="password"
          class="form-input px-4 py-3 rounded-full text-black"
          v-model="password"
        />
      </div>

      <div class="mt-14 text-right">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
