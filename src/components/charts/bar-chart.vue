<template>
  <div :id="baseId" type="bar"></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, watch } from "vue";
import { Bar } from "@antv/g2plot";
// 基础条形图

export default defineComponent({
  name: "bar-chart",
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
  setup: (props) => {
    const barChart: any = {};

    onUpdated(() => {
      console.log("onUpdated");
      const data: any[] = props.data;
      const config: any = props.config;
      const baseId: string = props.baseId;

      barChart.column = new Bar(baseId, {
        data,
        ...config,
      });
      barChart.column.render();
    });

    watch(props, (nweProps, oldProps) => {
      // barChart.bar.changeData(nweProps.data);
    });

    return {};
  },
});
</script>
