<template>
  <div :id="baseId" type="pie"></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, watch } from "vue";
import { Pie } from "@antv/g2plot";
// 基础饼图

export default defineComponent({
  name: "pie-chart",
  props: {
    baseId: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  setup: (props) => {
    console.log('setup');
    
    const pieChart: any = {};
    
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log('onUpdated');
      console.log(props);
      const data: any[] = props.data;
      const config: any = props.config;
      const baseId: string = props.baseId;

      pieChart.pie = new Pie(baseId, {
        data,
        ...config,
      });
      pieChart.pie.render();
    });

    watch(props, (newProps, oldProps) => {
      // pieChart.pie.changeData(newProps.data);
    });

    return {};
  },
});
</script>
