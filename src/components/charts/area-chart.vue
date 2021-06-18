<template>
  <div :id="baseId" type="area"></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, watch } from "vue";
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
    const areaChart: any = {};

    onUpdated(() => {
      const data: any = props.data;
      const config: any = props.config;
      const baseId: string = props.baseId;

      areaChart.area = new Area(baseId, {
        data,
        ...config,
      });
      areaChart.area.render();
    });

    watch(props, (nweProps, oldProps) => {
      // areaChart.area.changeData(nweProps.data);
    });

    return {};
  },
});
</script>
