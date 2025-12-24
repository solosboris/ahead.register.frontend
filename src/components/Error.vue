<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <h2>Error&nbsp;invalid&nbsp;input</h2>
  <p>Request&nbsp;not&nbsp;accepted.</p>
  <a href="#" @click.prevent="router.push('/register')">Back&nbsp;to&nbsp;Register</a>
</template>