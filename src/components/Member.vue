<template>
  <div>이름: {{ member.name }}</div>
  <div>MBTI: {{ memeber.mbti }}</div>
  <ul>취미:
    <li v-for="h in member.hobby">{{ h }}</li>
  </ul>
  <ul>좋아하는 것:
    <li v-for="fa in member.favorites">{{ fa }}</li>
  </ul>
  <div>GitHub 주소: {{ member.gitAddress }}</div>
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
