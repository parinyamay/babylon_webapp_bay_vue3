<script lang="ts" setup>
import { useUsersStore } from '@/stores/users'
import { ref, onMounted } from 'vue'
const store = useUsersStore()
const username = ref<string>('')
const password = ref<string>('')
const userInfo = ref<Object>()
const showModal = ref<boolean>(false)
const showPassword = ref<boolean>(false)
const version = ref<string>(APP_VERSION)

function onSubmit(): void {
  console.log('username: ' + username.value, 'password: ' + password.value)
  if (username.value && password.value) {
    store.login(username.value, password.value).then((res) => (userInfo.value = store.getAuthInfo))
  }
}

function clickShowPassword(): boolean {
  return (showPassword.value = !showPassword.value)
}

onMounted(() => {
  console.log('Mounted')
  showModal.value = true
})
</script>

<template>
  <div class="w-full min-h-screen bg-yellow-500">
    <!-- App version -->
    <p class="absolute bottom-2 right-2 text-xs">version {{ version }}</p>

    <div class="max-w-screen-md min-h-screen mx-auto px-4 pb-8 bg-white text-center">
      <div>
        <img class="m-auto" src="@/assets/images/login-logo.png" alt="" />
        <img class="m-auto" src="@/assets/images/login-text.png" alt="" />
      </div>

      <form @submit.prevent="onSubmit">
        <div class="mt-32">
          <input
            type="text"
            class="form-input max-w-xs w-full px-4 py-3 rounded-md text-black"
            v-model="username"
          />
        </div>

        <div class="relative mt-3 mx-auto max-w-xs w-full">
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-input w-full px-4 py-3 rounded-md text-black"
            v-model="password"
          />

          <button class="absolute top-3.5 right-3 rounded-full" @click="clickShowPassword">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fill-rule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div class="my-10">
          <button
            class="max-w-xs w-full py-3 px-8 rounded-md text-bay-color-brown bg-bay-button-yellow-idle hover:bg-bay-button-yellow-hover active:bg-bay-button-yellow-active"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </form>

      <div class="mt-24 text-center">
        <p>หากลืมรหัสผ่านกรุณาติดต่อ</p>
        <p>ส่วนงาน Partnership Support | เบอร์ติดต่อ: 02-6389076 | Email: anan.r@azay.co.th</p>
      </div>
    </div>
  </div>
</template>
