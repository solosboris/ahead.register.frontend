<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <h2>Logged&nbsp;in</h2>
  <a href="#" @click.prevent="router.push('/register')">Register&nbsp;again</a>
</template>