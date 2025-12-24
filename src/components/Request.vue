<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { rest } from '../services/rest'
import { isEmail } from '../utils/validators'

const router = useRouter()
const email = ref('')
const valid = computed(() => isEmail(email.value))

async function submit() {
  try {
    await rest.post(
      '/users/request', { email: email.value }
    )
    router.push('/login')
  } catch (e: any) {
    if (e.response?.status === 406) {
      router.push('/406')
    }
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-xl font-bold mb-4">Request&nbsp;Code</h2>
    <form @submit.prevent="submit" class="space-y-3">
      <input class="input" v-model="email" placeholder="Email" />
      <button type="submit" data-testid="submit-btn" :disabled="!valid" class="btn">
        Request
      </button>
    </form>
  </div>
</template>

<style scoped>
  .input { @apply w-full border p-2 rounded }
  .btn { @apply bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 }
</style>