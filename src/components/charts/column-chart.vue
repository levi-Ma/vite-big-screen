<template>
  <div :id="baseId" type="column"></div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, watch } from "vue";
import { Column } from "@antv/g2plot";
// 分组柱状图

export default defineComponent({
  name: "column-chart",
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
    const columnChart: any = {};

    onUpdated(() => {
      console.log('onUpdated');
      const data: any[] = props.data;
      const config: any = props.config;
      const baseId: string = props.baseId;

      columnChart.column = new Column(baseId, {
        data,
        ...config,
      });
      columnChart.column.render();
    });

    watch(props, (nweProps, oldProps) => {
      // columnChart.column.changeData(nweProps.data);
    });

    return {};
  },
});
</script>
