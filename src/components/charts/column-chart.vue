<template>
  <div :id="baseId" type="column"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
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
    const LineChart: any = {};
    const data: any = props.data;
    const config: any = props.config;
    const baseId: string = props.baseId;

    watch(props, (nweProps, oldProps) => {
      LineChart.column.changeData(nweProps.data);
    });

    onMounted(() => {
      LineChart.column = new Column(baseId, {
        data,
        ...config,
      });
      LineChart.column.render();
    });

    return {};
  },
});
</script>
