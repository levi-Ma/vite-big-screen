import Mock from "better-mock";
import "./random";
import {
  PERCENTAGE,
  ARRIVALRATE,
  TOTALEXPRESS,
  USERANALYSIS,
} from "../services/api";

Mock.mock(PERCENTAGE, {
  "data|1-20": [
    {
      type: "@ctitle",
      value: "@natural(0, 10000)",
    },
  ],
});

Mock.mock(ARRIVALRATE, {
  data: [
    {
      title: "春风云仓-河东仓",
      type: "问题率",
      value: "@integer(0, 1000)",
    },
    {
      title: "春风云仓-河东仓",
      type: "到达率",
      value: "@integer(0, 1000)",
    },
    {
      title: "喜鹊驿站总仓",
      type: "问题率",
      value: "@integer(0, 1000)",
    },
    {
      title: "喜鹊驿站总仓",
      type: "到达率",
      value: "@integer(0, 1000)",
    },
  ],
});

Mock.mock(TOTALEXPRESS, {
  data: [
    {
      type: "2020 Q1",
      数量: "@integer(0, 100000)",
    },
    {
      type: "2020 Q2",
      数量: "@integer(0, 100000)",
    },
    {
      type: "2020 Q3",
      数量: "@integer(0, 100000)",
    },
    {
      type: "2020 Q4",
      数量: "@integer(0, 100000)",
    },
    {
      type: "2021 Q1",
      数量: "@integer(0, 100000)",
    },
    {
      type: "2021 Q2",
      数量: "@integer(0, 100000)",
    },
  ],
});

Mock.mock(USERANALYSIS, {
  data: [
    {
      title: "未知",
      value: "@integer(0, 100000)",
    },
    {
      title: "男性",
      value: "@integer(0, 100000)",
    },
    {
      title: "女性",
      value: "@integer(0, 100000)",
    },
  ],
});
