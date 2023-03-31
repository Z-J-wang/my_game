<template>
  <div class="home">
    <h1>游戏列表</h1>
    <ul>
      <li>
        <router-link :to="{name:'Gluttonous_Snake'}">贪吃蛇</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
