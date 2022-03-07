<template>
  <suspense>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </suspense>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
body{
  font-size: medium;
}
</style>
