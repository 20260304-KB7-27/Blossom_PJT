<template>
  <nav class="navbar navbar-expand-sm bg-warning navbar-dark">
    <span class="navbar-brand ps-2"> 🌸 봄 플젝 벚꽃 말고 🌸</span>
    <button
      class="navbar-toggler"
      type="button"
      @click="isNavShow = !isNavShow"
    >버튼
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      :class="
        isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'
      "
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/team">팀 소개</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/teamrule">팀 규칙</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/teammate">팀원 소개</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue';
const isNavShow = ref(false);
</script>
