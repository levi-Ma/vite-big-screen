<template>
  <div :id="baseId" type="area"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { Area } from "@antv/g2plot";
// 基础面积图

export default defineComponent({
  name: "area-chart",
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
      LineChart.area.changeData(nweProps.data);
    });

    onMounted(() => {
      LineChart.area = new Area(baseId, {
        data,
        ...config,
      });
      LineChart.area.render();
    });

    return {};
  },
});
</script>
