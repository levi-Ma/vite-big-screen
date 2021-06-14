const getCurrentTime = () => {
  const vWeek = [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  const vWeeks = date.getDay();
  return (
    year +
    "年" +
    month +
    "月" +
    day +
    "日" +
    "\t" +
    vWeek[vWeeks] +
    "\t" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};

export default getCurrentTime;
