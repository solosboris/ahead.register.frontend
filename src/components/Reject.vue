<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <h2>Unauthorized</h2>
  <p>Invalid&nbsp;code.</p>
  <a href="#" @click.prevent="router.push('/register')">Back&nbsp;to&nbsp;register</a>
</template>