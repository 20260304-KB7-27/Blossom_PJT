<template>
  <div>멤버 이름:</div>
  <div>멤버 연락처:</div>
  <div>멤버 MBTI:</div>
</template>

<script setup>
defineProps({
  member: {
    Type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
