<template>
  <div class="detail">
    <van-form @submit="onSubmitClick">
      <!-- 身份 -->
      <div class="span">患者类型</div>
      <span class="required"> *(必填项)</span>
      <van-field name="infor.radio">
        <template #input>
          <van-radio-group v-model="infor.radio" direction="horizontal">
            <van-radio name="1" label-position="left"
              >肿瘤患者
              <template #icon="props">
                <img
                  class="img-icon"
                  :src="props.checked ? activeIcon : inactiveIcon"
                />
              </template>
            </van-radio>
            <van-radio name="2" label-position="left"
              >病患家属
              <template #icon="props">
                <img
                  class="img-icon"
                  :src="props.checked ? activeIcon : inactiveIcon"
                />
              </template>
            </van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <!-- 姓名 -->
      <div class="span">患者姓名</div>
      <span class="required"> *(必填项)</span>
      <van-field
        v-model="infor.name"
        name="pattern"
        placeholder="请输入患者姓名"
        :rules="[{ required: true }]"
      />
      <!-- 手机号码 -->
      <div class="span">手机号码</div>
      <span class="required"> *(必填项)</span>

      <van-field
        v-model="infor.phone"
        name="pattern"
        placeholder="请输入患者手机号"
        :rules="[{ required: true, pattern }]"
      />
      <!-- 生日 -->
      <div class="span">患者生日</div>
      <span class="required"> *(必填项)</span>
      <div class="time">
        <div id="date_time_picker">
          <van-field
            v-model="infor.birthdayDate"
            placeholder="点击选择日期"
            readonly
            @click="showCalendar1 = true"
          />
          <van-popup
            v-model="showCalendar1"
            position="bottom"
            :style="{ height: '48%' }"
          >
            <van-datetime-picker
              v-model="birthdayDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirmClick1()"
              @cancel="onCancelClick1()"
            />
          </van-popup>
        </div>
        <img src="../../assets/time.png" alt="" @click="showCalendar1 = true" />
      </div>

      <!-- 确诊日期 -->

      <div class="span">患者确诊日期</div>
      <span class="required"> *(必填项)</span>

      <div class="time">
        <div id="date_time_picker">
          <van-field
            v-model="infor.confirmedDate"
            placeholder="点击选择日期"
            readonly
            @click="showCalendar2 = true"
          />
          <van-popup
            v-model="showCalendar2"
            position="bottom"
            :style="{ height: '48%' }"
          >
            <van-datetime-picker
              v-model="confirmedDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirmClick2()"
              @cancel="onCancelClick2()"
            />
          </van-popup>
        </div>
        <img src="../../assets/time.png" alt="" @click="showCalendar2 = true" />
      </div>

      <!-- 手术日期 -->

      <div class="span">首次手术日期</div>
      <div class="time">
        <div id="date_time_picker">
          <van-field
            v-model="infor.operationDate"
            placeholder="点击选择日期"
            readonly
            @click="showCalendar3 = true"
          />
          <van-popup
            v-model="showCalendar3"
            position="bottom"
            :style="{ height: '48%' }"
          >
            <van-datetime-picker
              v-model="operationDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirmClick3()"
              @cancel="onCancelClick3()"
            />
          </van-popup>
        </div>
        <img src="../../assets/time.png" alt="" @click="showCalendar3 = true" />
      </div>
      <!-- 首次放化疗时期 -->
      <div class="span">首次放化疗日期</div>
      <div class="time">
        <div id="date_time_picker">
          <van-field
            v-model="infor.firstChemoradiotherapy"
            placeholder="点击选择日期"
            readonly
            @click="showCalendar4 = true"
          />
          <van-popup
            v-model="showCalendar4"
            position="bottom"
            :style="{ height: '48%' }"
          >
            <van-datetime-picker
              v-model="firstChemoradiotherapy"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirmClick4()"
              @cancel="onCancelClick4()"
            />
          </van-popup>
        </div>
        <img src="../../assets/time.png" alt="" @click="showCalendar4 = true" />
      </div>

      <!-- 最近一次放化疗时期 -->
      <div class="span">最近一次放化疗时期</div>
      <div class="time">
        <div id="date_time_picker">
          <van-field
            v-model="infor.latestChemoradiotherapy"
            placeholder="点击选择日期"
            readonly
            @click="showCalendar5 = true"
          />
          <van-popup
            v-model="showCalendar5"
            position="bottom"
            :style="{ height: '48%' }"
          >
            <van-datetime-picker
              v-model="latestChemoradiotherapy"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @confirm="onConfirmClick5()"
              @cancel="onCancelClick5()"
            />
          </van-popup>
        </div>
        <img src="../../assets/time.png" alt="" @click="showCalendar5 = true" />
      </div>

      <!-- 提交 -->
      <div style="margin: 16px;" class="font">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          :class="
            infor.name != '' &&
            infor.birthdayDate != '' &&
            infor.confirmedDate != '' &&
            infor.phone != ''
              ? ''
              : 'disabled'
          "
          :disabled="
            infor.name != '' &&
            infor.birthdayDate != '' &&
            infor.confirmedDate != ''
              ? false
              : true
          "
          >下一步</van-button
        >
      </div>

      <div class="bottom">
        <span>平安肿瘤康复会对您的个人信息严格保密,所有</span>
        <span>信息仅供对您的康复项目使用</span>
      </div>
    </van-form>
    <my-child ref="child" class="sroll"></my-child>
  </div>
</template>

<script>
import http from "../../http";
import { Toast } from "vant";
import MyChild from "../../components/MyChild.vue";
export default {
  components: { MyChild },
  data() {
    return {
      // 时间选择器
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      showPicker: false,
      activeIcon: require("../../assets/active.png"),
      inactiveIcon: require("../../assets/icon.png"),
      showCalendar1: false,
      showCalendar2: false,
      showCalendar3: false,
      showCalendar4: false,
      showCalendar5: false,
      birthdayDate:new Date(2000, 1, 1),
      confirmedDate: new Date(2000, 1, 1),
      operationDate:new Date(2000, 1, 1),
      firstChemoradiotherapy: new Date(2000, 1, 1),
      latestChemoradiotherapy: new Date(2000, 1, 1),
      infor: {
        phone: "",
        //病症
        diseaselist: [],
        //身份
        radio: "1",
        //名字
        name: "",
        // 生日
        birthdayDate: "",
        //确诊日期
        confirmedDate: "",
        // 首次手术的时期
        operationDate: "",
        // 首次放化疗的日期
        firstChemoradiotherapy: "",
        // 最近一次放化疗时期
        latestChemoradiotherapy: "",
      },
      pattern: /\d{11}/,
    };
  },

  methods: {
    //提交
    onSubmitClick() {
      this.$refs.child.show();
      this.sendinfor(this.infor);
    },

    // 日期选择器
    // 确定按钮
    onConfirmClick1() {
      this.infor.birthdayDate = this.formatTime(this.birthdayDate);
      this.showCalendar1 = false;
    },
    onConfirmClick2() {
      this.infor.confirmedDate = this.formatTime(this.confirmedDate);
      this.showCalendar2 = false;
    },
    onConfirmClick3() {
      this.infor.operationDate = this.formatTime(this.operationDate);
      this.showCalendar3 = false;
    },
    onConfirmClick4() {
      this.infor.firstChemoradiotherapy = this.formatTime(
        this.firstChemoradiotherapy
      );
      this.showCalendar4 = false;
    },
    onConfirmClick5() {
      this.infor.latestChemoradiotherapy = this.formatTime(
        this.latestChemoradiotherapy
      );
      this.showCalendar5 = false;
    },
    //取消
    onCancelClick1() {
      this.showCalendar1 = false;
    },
    //取消
    onCancelClick2() {
      this.showCalendar2 = false;
    },
    //取消
    onCancelClick3() {
      this.showCalendar3 = false;
    },
    //取消
    onCancelClick4() {
      this.showCalendar4 = false;
    },
    //取消
    onCancelClick5() {
      this.showCalendar5 = false;
    },
    formatTime(Gdate) {
      var moment = require("moment");
      let Ndate = moment(Gdate).format("YYYY-MM-DD");
      return Ndate;
    },
    async sendinfor(infor) {
      try {
        const res = await http.sendInfor(infor);
        console.log(res);
        this.$refs.child.show();
      } catch {
        Toast.fail("服务器繁忙，请稍后再试...");
      }
    },
  },
  mounted() {
    console.log(this.$router.currentRoute.params.list);
    for (let i in this.$router.currentRoute.params.list) {
      this.infor.diseaselist.push(this.$router.currentRoute.params.list[i]); //属性
    }
  },
};
</script>

<style lang="less" scoped>
.img-icon {
  height: 24px;
  width: 24px;
}
@backgroundcolor: #1989fa;
.detail {
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  height: 100%;
}
.span {
  margin-top: 28px;
  margin-left: 28px;
  display: inline-block;
  font-size: 30px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  line-height: 54px;
  color: #333333;
}
.van-cell,
.rank {
  width: 694px;
  height: 92px;
  margin: 0px 28px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(199, 199, 199, 0.1);
  border-radius: 10px;
  margin-top: 20px;
}
/deep/.van-button--danger {
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
}
/deep/.van-calendar__selected-day {
  width: 1.44rem;
  height: 1.44rem;
  color: #fff;
  background-color: #1989fa;
  border-radius: 0.10667rem;
}
.van-radio {
  font-size: 28px;
}
.font {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom {
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #999999;
  display: flex;
  margin-top: 42px;
  flex-direction: column;
  align-items: center;
  span {
    margin: 5px;
    font-size: 20px;
  }
}
.required {
  color: red;
  font-size: 30px;
}
.disabled {
  background: #a2a2a2;
  border: 1px solid #a2a2a2;
}
.time {
  position: relative;
  img {
    position: absolute;
    right: 50px;
    top: 30px;
    width: 40px;
    height: 38px;
  }
}
.van-radio-group--horizontal {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

body.sroll{
    overflow: hidden;
    position: fixed;
}
</style>
