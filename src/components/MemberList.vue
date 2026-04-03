<template>
  <Member v-for="member in memberlist" :key="member.id"></Member>
</template>

<script setup>
import Member from './Member.vue';
import { ref } from 'vue';

const memberlist = ref([]);
</script>

<style scoped></style>
