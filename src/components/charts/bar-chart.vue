<template>
  <div :id="baseId" type="bar"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
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
    const LineChart: any = {};
    const data: any = props.data;
    const config: any = props.config;
    const baseId: string = props.baseId;

    watch(props, (nweProps, oldProps) => {
      LineChart.bar.changeData(nweProps.data);
    });

    onMounted(() => {
      LineChart.bar = new Bar(baseId, {
        data,
        ...config,
      });
      LineChart.bar.render();
    });

    return {};
  },
});
</script>
