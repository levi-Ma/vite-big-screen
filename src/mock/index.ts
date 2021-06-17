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
      云仓名称: "春风云仓-河东仓",
      到达率: "@natural(100)",
      问题率: "@natural(100)",
    },
    {
      云仓名称: "喜鹊驿站总仓",
      到达率: "@natural(100)",
      问题率: "@natural(100)",
    },
  ],
});

Mock.mock(TOTALEXPRESS, {
  "data|1-10": [
    {
      type: "@data(yyyy)",
      sales: "@natural(0, 10000)",
    },
  ],
});

Mock.mock(USERANALYSIS, {
  data: [
    {
      性别: "未知",
      数量: "@natural(0, 10000)",
    },
    {
      性别: "男性",
      数量: "@natural(0, 10000)",
    },
    {
      性别: "女性",
      数量: "@natural(0, 10000)",
    },
  ],
});
