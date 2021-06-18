<template>
  <div :id="baseId" type="pie"></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, watch } from "vue";
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
    const LineChart: any = {};
    const data: any = props.data;
    const config: any = props.config;
    const baseId: string = props.baseId;

    watch(props, (newProps, oldProps) => {
      LineChart.pie.changeData(newProps.data);
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
      LineChart.pie = new Pie(baseId, {
        data,
        ...config,
      });
      LineChart.pie.render();
    });

    return {};
  },
});
</script>
