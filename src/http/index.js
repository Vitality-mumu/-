import axios from "axios";
// 默认网址
// axios.defaults.baseURL = "https://wanbei.site/api/wx/index";
// 添加请求拦截器
axios.interceptors.response.use(
  function(response) {
    // console.log(response.status);
    // 在发送请求之前做些什么
    if (response.status == 200) {
      const { code, data, msg } = response.data; // console.log(response.data);
      if (code == 1) {
        return data;
      }
      return Promise.reject(msg); // 返回错误提示
    } else {
      return Promise.reject("请求失败");
    }
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
export default {
  sendInfor(infor) {
    const arr = {
      identity: infor.radio, //家属或患者
      cancer: infor.diseaselist.join(","),
      username: infor.name,
      birthday: infor.birthdayDate,
      confirm: infor.confirmedDate, // 确诊日期
      operation: infor.operationDate, // 手术日期
      firstHeal: infor.firstChemoradiotherapy, // 首次化放疗日期
      lastHeal: infor.latestChemoradiotherapy, // 最近化放疗日期
      phone: infor.phone,
    };
    console.log(arr);
    return axios.post("https://wanbei.site/api/wx/index/userinfo", arr);
  },

  // test() {
  //   return axios.post("https://wanbei.site/api/bayajk/index/testingDetail", {
  //     session:
  //       "kd339Mz9jHjOfc6qXYeGHwujBvtHtOpQ/US4mK+1YK4mT+3sBkJQ8Sg365ZxqlSwTArMsPnGmWOW/LMDd2+80PFQQrngRyDqw1MVprFU/txfTZqlG8uLXQ==",
  //     testing: "brainBlock",
  //   });
  // },
};
