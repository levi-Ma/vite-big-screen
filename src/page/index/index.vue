<template>
  <div class="index-container">
    <!-- 顶部 -->
    <div class="top-title">
      <div class="time-box flex">
        <img class="icon" src="@/assets/img/icon_1.png" />
        <p class="time">{{ currentTime || "加载中" }}</p>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="chart-body px-5 flex">
      <!-- 左侧数据 -->
      <div class="chart-side">
        <!-- 云仓排名 -->
        <div class="chart-item height-1">
          <div class="chart-title flex">
            <p class="title font-bold text-white">云仓排名</p>
          </div>
          <div class="yuncang-rank overflow-y-auto h-3/4 pt-2">
            <ul>
              <li class="flex text-white">
                <div class="rank">NO.1</div>
                <div class="name truncate">
                  云仓排名云仓排名云仓排名云仓排名云仓排名
                </div>
                <div class="histogram"></div>
                <div class="number">123</div>
              </li>
            </ul>
          </div>
          <div class="chart-line"></div>
        </div>

        <!-- 快递公司快件占比综合监测 -->
        <div class="chart-item height-2">
          <div class="chart-title flex">
            <p class="title text-white">快递公司快件占比综合监测</p>
          </div>
          <div class="pt-2">
            <PieChart :data="pieData.data" v-bind="pieData.config" />
          </div>
          <div class="chart-line"></div>
        </div>

        <!-- 驿站到达率问题率比例 -->
        <div class="chart-item height-3">
          <div class="chart-title flex">
            <p class="title text-white">驿站到达率问题率比例</p>
          </div>
          <div class="pt-3">
            <!-- <n-button type="primary" @click="handleBtnClick">添加数据</n-button> -->
            <ColumnChart :data="columnData.data" v-bind="columnData.config" />
          </div>
          <div class="chart-line"></div>
        </div>
      </div>

      <!-- 中间列数据 -->
      <div class="chart-center">
        <!-- 数据统计 -->
        <div class="chart-number flex space-x-3">
          <div class="number-box flex flex-1">
            <div class="hint-box flex">
              <img class="icon" src="@/assets/img/icon_2.png" />
              <p class="text">总快件数量</p>
            </div>
            <div class="number">123</div>
          </div>
          <div class="number-box flex flex-1">
            <div class="hint-box flex">
              <img class="icon" src="@/assets/img/icon_3.png" />
              <p class="text">实时快件数</p>
            </div>
            <div class="number">234</div>
          </div>
          <div class="number-box flex flex-1">
            <div class="hint-box flex">
              <img class="icon" src="@/assets/img/icon_4.png" />
              <p class="text">用户量</p>
            </div>
            <div class="number">123</div>
          </div>
        </div>
        <!-- 驿站分布 -->
        <div class="chart-item height-map">
          <div class="chart-title flex">
            <p class="title text-white">驿站分布</p>
          </div>
          <div class="map-view pt-2">
            <div id="map-container" style="height: 390px; width: 100%"></div>
          </div>
          <div class="chart-line"></div>
        </div>
        <!-- 总快件走势图 -->
        <div class="chart-item height-3">
          <div class="chart-title flex">
            <p class="title text-white">总快件走势图</p>
          </div>
          <div class="pt-2">
            <AreaChart :data="lineData.data" v-bind="lineData.config" />
          </div>
          <div class="chart-line"></div>
        </div>
      </div>

      <!-- 右侧数据 😉 -->
      <div class="chart-side">
        <!-- 服务监控 -->
        <div class="chart-item height-4">
          <div class="chart-title flex">
            <p class="title text-white">服务监控</p>
          </div>
          <div class="video-view pt-5">
            <video
              ref="myRef"
              autoplay
              controls
              width="100%"
              class="video-box"
            ></video>
          </div>
          <div class="chart-line"></div>
        </div>
        <!-- 拼团订单统计 -->
        <div class="chart-item height-5">
          <div class="chart-title flex">
            <p class="title text-white">拼团订单统计</p>
          </div>
          <div class="chart-number flex space-x-3">
            <div class="number-box flex flex-1">
              <div class="hint-box flex">
                <img class="icon" src="@/assets/img/icon_2.png" />
                <p class="text">总订单数量</p>
              </div>
              <div class="number">123</div>
            </div>
            <div class="number-box flex flex-1">
              <div class="hint-box flex">
                <img class="icon" src="@/assets/img/icon_2.png" />
                <p class="text">今日订单数量</p>
              </div>
              <div class="number">123</div>
            </div>
          </div>
          <div class="yuncang-rank overflow-y-auto h-3/6 pt-2">
            <ul>
              <li class="flex text-white">
                <div class="rank">NO.1</div>
                <div class="name truncate">
                  云仓排名云仓排名云仓排名云仓排名云仓排名
                </div>
                <div class="histogram"></div>
                <div class="number">123</div>
              </li>
            </ul>
          </div>
          <div class="chart-line"></div>
        </div>
        <!-- 用户分析 -->
        <div class="chart-item height-6">
          <div class="chart-title flex">
            <p class="title text-white">用户分析</p>
          </div>
          <div class="pt-2">
            <BarChart :data="barData.data" v-bind="barData.config" />
          </div>
          <div class="chart-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, onMounted } from "vue";

import axios from "axios";
import AMapLoader from "@amap/amap-jsapi-loader";
// import flvjs from "flv.js";
import { NButton } from "naive-ui";
import { AreaChart, BarChart, ColumnChart, PieChart } from "@opd/g2plot-vue";

import {
  PERCENTAGE,
  ARRIVALRATE,
  TOTALEXPRESS,
  USERANALYSIS,
} from "@/services/api";
// 当前时间
import getCurrentTime from "@/utils/getCurrentTime";

export default defineComponent({
  name: "index",
  components: {
    AreaChart,
    BarChart,
    ColumnChart,
    PieChart,
    NButton,
  },
  setup: () => {
    const currentTime = ref("");
    const pieData: any = {
      config: {
        width: 300,
        height: 300,
        angleField: "value",
        colorField: "type",
        radius: 0.75,
        label: {
          type: "spider",
          labelHeight: 28,
          content: "{name}\n{percentage}",
          style: {
            fill: "#ffffff",
            fontSize: 12,
          },
        },
        legend: false,
        interactions: [
          { type: "element-selected" },
          { type: "element-active" },
        ],
      },
    };
    const columnData: any = {
      config: {
        height: 230,
        xField: "title",
        yField: "value",
        seriesField: "type",
        isGroup: "true",
        label: {
          layout: [
            { type: "interval-adjust-position" },
            { type: "interval-hide-overlap" },
            { type: "adjust-color" },
          ],
        },
        legend: {
          position: "bottom",
          itemName: {
            style: {
              fill: "#fff",
            },
          },
        },
        xAxis: {
          label: {
            style: {
              fill: "#ffffff",
            },
          },
        },
        yAxis: {
          label: {
            style: {
              fill: "#ffffff",
            },
          },
        },
      },
    };
    const lineData: any = {
      data: null,
      config: {
        height: 220,
        xField: "type",
        yField: "数量",
        smooth: true,
        xAxis: {
          label: {
            style: {
              fill: "#ffffff",
            },
          },
        },
        yAxis: {
          label: {
            style: {
              fill: "#ffffff",
            },
          },
        },
      },
    };
    const barData: any = {
      config: {
        height: 120,
        xField: "value",
        yField: "title",
        seriesField: "title",
        legend: false,
        xAxis: {
          label: {
            style: {
              fill: "#ffffff",
            },
          },
        },
        yAxis: {
          label: {
            style: {
              fill: "#ffffff",
            },
          },
        },
      },
    };
    const myRef: any = ref(null);

    axios.get(PERCENTAGE).then((res) => {
      pieData.data = res.data.data;
    });

    axios.get(ARRIVALRATE).then((res) => {
      columnData.data = res.data.data;
    });

    axios.get(TOTALEXPRESS).then((res) => {
      lineData.data = res.data.data;
    });

    axios.get(USERANALYSIS).then((res) => {
      barData.data = res.data.data;
    });

    setInterval(() => {
      currentTime.value = getCurrentTime();
    }, 1000);

    // 更新数据的方法
    // const handleBtnClick = () => {
    //   const lastItem = testData.data[testData.data.length - 1];
    //   testData.data = [
    //     ...testData.data,
    //     {
    //       year: (+lastItem.year + 1).toString(),
    //       value: Math.ceil(Math.random() * 100),
    //     },
    //   ];
    // };

    // 高德地图
    AMapLoader.load({
      key: "1303d75fa249a1f3b3899c7e62b715be", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.ToolBar"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: {
        // 是否加载 AMapUI，缺省不加载
        version: "1.1", // AMapUI 缺省 1.1
        plugins: [], // 需要加载的 AMapUI ui插件
      },
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: "1.3.2", // Loca 版本，缺省 1.3.2
      },
    })
      .then((AMap) => {
        const map = new AMap.Map("map-container", {
          zoom: 12, //级别
          center: [116.397428, 39.90923], //中心点坐标
          viewMode: "3D", //使用3D视图
          resizeEnable: true, //是否监控地图容器尺寸变化
          mapStyle: "amap://styles/darkblue",
        });
        let marker1 = new AMap.Marker({
          position: new AMap.LngLat(116.397948, 39.900262),
          icon: "https://mqyz.fengzhishike.cn/attachment/images/2020/10/17/image_1602899689_z8i9Iz89.png", // 添加 Icon 图标 URL
        });
        let marker2 = new AMap.Marker({
          position: new AMap.LngLat(116.402841, 39.90148),
          icon: "https://mqyz.fengzhishike.cn/attachment/images/2020/10/17/image_1602899689_z8i9Iz89.png", // 添加 Icon 图标 URL
        });
        const markers = [marker1, marker2];
        map.add(markers);

        map.setStatus({
          dragEnable: true,
          keyboardEnable: true,
          doubleClickZoom: true,
          zoomEnable: true,
          rotateEnable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // flv.js
    nextTick(() => {
      console.dir(myRef.value);
      // console.log(flvjs);

      // if (flvjs.isSupported()) {
      //   const flvPlay = flvjs.createPlayer({
      //     type: "flv",
      //     url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv", //你的url地址
      //   });
      //   flvPlay.attachMediaElement(myRef.value);
      //   flvPlay.load();
      //   flvPlay.play();
      // }
    });

    return {
      myRef,
      currentTime,
      pieData,
      columnData,
      lineData,
      barData,
    };
  },
});
</script>

<style lang="scss">
.index-container {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-image: url("@/assets/img/bg.png");
  background-size: 100% 100vh;
  @apply px-5 bg-no-repeat bg-center;
}

.top-title {
  width: 100%;
  height: 82px;
  background-image: url("@/assets/img/top_bg.png");
  background-size: 100% 82px;
  @apply bg-no-repeat bg-center;

  .time-box {
    align-items: center;
    padding: 6px 0 0 77px;

    .icon {
      width: 28px;
      height: 28px;
      margin-right: 2px;
    }

    .time {
      padding-top: 3px;
      line-height: 1;
      font-size: 22px;
      font-weight: bold;
      color: #adadad;
      text-shadow: 1px 2px 4px rgba(4, 0, 0, 0.3);
    }
  }
}

.chart-body {
  width: 100%;
  height: calc(100vh - 134px);
  justify-content: space-around;

  .chart-side {
    width: 27%;
    height: 100%;
  }

  .chart-center {
    width: 44%;
    height: 100%;
  }

  .chart-number {
    width: 100%;
    height: 142px;
    margin-bottom: 13px;
    justify-content: space-between;
    padding-top: 28px;

    .number-box {
      height: 118px;
      flex-direction: column;
      background-image: url("@/assets/img/number_bg.png");
      background-size: 100% 118px;
      background-repeat: no-repeat;
      background-position: center;
      justify-content: center;
      align-items: center;

      .hint-box {
        align-items: center;
        margin-bottom: 5px;

        .icon {
          width: 27px;
          height: 27px;
          margin-right: 2px;
        }

        .text {
          font-size: 20px;
          font-weight: bold;
          color: #adadad;
          text-shadow: 1px 2px 4px rgba(4, 0, 0, 0.3);
        }
      }

      .number {
        font-size: 34px;
        font-weight: bold;
        color: #e6bb3b;
      }
    }
  }

  .chart-item {
    position: relative;
    width: 100%;
    padding: 19px 19px 0;
    background: rgba(12, 27, 66, 0.8);
    box-shadow: 0px 2px 24px 0px rgba(5, 12, 29, 0.24);

    .chart-title {
      width: auto;
      height: 33px;

      .title {
        height: 33px;
        line-height: 33px;
        box-sizing: border-box;
        padding: 0 13px;
        font-size: 17px;
        background: linear-gradient(
          180deg,
          transparent 0%,
          rgba(15, 166, 222, 0.3) 30%,
          rgba(15, 166, 222, 0.8) 100%
        );
      }
    }

    .chart-line {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 10;
      width: 21px;
      height: 4px;
      background: #0fa6de;
    }

    &.height-1 {
      height: 240px;
      margin-bottom: 13px;
    }

    &.height-2 {
      height: 370px;
      margin-bottom: 13px;
    }

    &.height-3 {
      height: 310px;
    }

    &.height-4 {
      height: 294px;
      margin-bottom: 13px;
    }

    &.height-5 {
      height: 414px;
      margin-bottom: 13px;
    }

    &.height-6 {
      height: 212px;
    }

    &.height-num {
      height: 142px;
      margin-bottom: 13px;
    }

    &.height-map {
      height: 468px;
      margin-bottom: 13px;
    }
  }
}

.yuncang-rank {
  ul {
    li {
      align-items: center;
      cursor: pointer;
    }
  }
  .rank {
    width: 10%;
    margin-right: 10px;
    font-size: 18px;
    color: #dadd4b;
    transform: skew(-20deg);
  }
  .name {
    width: 26%;
    max-width: 26%;
    height: 20px;
    font-size: 14px;
  }
  .histogram {
    width: 100px;
    max-width: 220px;
    height: 6px;
    margin-left: 12px;
    margin-right: 12px;
    background: #fff;
    background-image: linear-gradient(to right, #00c6ff, #0072ff);
    border-radius: 10px;
  }
  .number {
    font-size: 14px;
  }
}
</style>
