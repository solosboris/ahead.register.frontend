<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { rest } from '../services/rest'
import { isEmail, isSixDigitCode } from '../utils/validators'

const router = useRouter()
const email = ref('')
const code = ref('')
const valid = computed(() =>
  isEmail(email.value) && isSixDigitCode(code.value)
)

async function submit() {
  try {
    await rest.post('/users/login', {
      email: email.value,
      code: Number(code.value)
    })
    router.push('/logged')
  } catch (e: any) {
    if (e.response?.status === 401) {
      router.push('/401')
    }
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="submit" class="space-y-3">
      <input class="input" v-model="email" placeholder="Email"/>
      <input class="input" v-model="code" placeholder="6-digit code" maxlength="6"/>
      <p v-if="code && !isSixDigitCode(code)" class="text-red-500 text-sm">
        Code&nbsp;must&nbsp;be&nbsp;6&nbsp;digits
      </p>
      <button type="submit" data-testid="submit-btn" :disabled="!valid" class="btn">
        Login
      </button>
    </form>
  </div>
</template>

<style scoped>
  .input { @apply w-full border p-2 rounded }
  .btn { @apply bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 }
</style>