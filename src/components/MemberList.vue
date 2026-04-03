<template>
  <Member v-for="member in memberlist" :key="member.id"></Member>
</template>

<script setup>
import Member from './Member.vue';
import { ref } from 'vue';
import userlist from '@/db.json';

const memberlist = ref([]);

const fetchMemberlist = () => {
  memberlist.value = userlist.users;
};

onMounted(() => {
  fetchMemberlist();
});
</script>

<style scoped></style>
