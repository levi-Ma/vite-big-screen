<template>
  <div :id="baseId"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { Line } from "@antv/g2plot";

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
    const data: any = props.data;
    const config: any = props.config;
    const baseId: string = props.baseId;

    watch(props, (nweProps, oldProps) => {
      LineChart.line.changeData(nweProps.data);
    });

    onMounted(() => {
      LineChart.line = new Line(baseId, {
        data,
        ...config,
      });
      LineChart.line.render();
    });

    return {};
  },
});
</script>
