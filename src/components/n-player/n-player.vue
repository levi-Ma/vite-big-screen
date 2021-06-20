<template>
  <NPlayer
    :options="{ src: 'https://v-cdn.zjol.com.cn/280443.mp4' }"
    :set="setPlayer"
  />
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "n-player",
  setup () {
    let player = null;

    onMounted(() => {
      console.log(player);
    });

    return {
      setPlayer: (p) => (player = p),
    };
  },
};
</script>
