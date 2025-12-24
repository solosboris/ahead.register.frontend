<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { rest } from '../services/rest'
import { isEmail } from '../utils/validators'

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const valid = computed(() =>
  firstName.value && lastName.value && isEmail(email.value)
)

async function submit() {
  try {
    await rest.post('/users/register', {
      id: '',
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    })
    router.push('/request')
  } catch (e: any) {
    if (e.response?.status === 406) {
      router.push('/406')
    }
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-xl font-bold mb-4">Register</h2>

    <form @submit.prevent="submit" class="space-y-3">
      <input class="input" v-model="firstName" placeholder="First name"/>
      <input class="input" v-model="lastName" placeholder="Last name"/>
      <input class="input" v-model="email" placeholder="Email"/>

      <p v-if="email && !isEmail(email)" class="text-red-500 text-sm">
        Invalid email
      </p>

      <button type="submit" data-testid="submit-btn" :disabled="!valid" class="btn">
        Register
      </button>
    </form>
  </div>
</template>

<style scoped>
  .input { @apply w-full border p-2 rounded }
  .btn { @apply bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 }
</style>