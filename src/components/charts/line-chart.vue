<template>
  <div :id="baseId" type="line"></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, watch } from "vue";
import { Line } from "@antv/g2plot";
// 基础折线图

export default defineComponent({
  name: "line-chart",
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
    const LineChart: any = {};

    onUpdated(() => {
      const data: any = props.data;
      const config: any = props.config;
      const baseId: string = props.baseId;

      LineChart.line = new Line(baseId, {
        data,
        ...config,
      });
      LineChart.line.render();
    });

    watch(props, (nweProps, oldProps) => {
      // LineChart.line.changeData(nweProps.data);
    });

    return {};
  },
});
</script>
