<template>
  <div class="disease">

    <div class="content">
      <div class="first">请选择</div>
      <div class="title">您想了解的疾病类型</div>
      <div class="diseasetype">
        <div
          v-for="(item, index) in list"
          class="item"
          :class="{ active: selectlist.indexOf(item) != -1 }"
          :key="index"
          @click="onChangeClick(index, item)"
        >
          {{ item }}
        </div>
        <div class="item" @click="onElseClick">其它</div>
      </div>
      <van-button
        round
        type="info"
        block
        @click="onNextClick"
        :class="selectlist.length == 0 ? 'disabled' : ''"
        :disabled="selectlist.length > 0 ? false : true"
        >下一步</van-button
      >
    </div>

    <div></div>

    <van-dialog
      v-model="show"
      title="其它病例"
      theme="round-button"
      @confirm="onConfirmClick"
    >
      <template #default>
        <van-icon name="cross" @click="onCloseClick" />
      </template>
      <template #title>
        <div class="elsetitle">其它病例</div>
        <van-field v-model="value" placeholder="请输入患者病症" class="input" />
      </template>
    </van-dialog>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      flag: 0,
      selectlist: [],
      show: false,
      value: "",
      list: [
        "肺癌",
        "乳腺癌",
        "卵巢癌",
        "胃癌",
        "肝癌",
        "肠癌",
        "胰腺癌",
        "膀胱癌",
        "淋巴癌",
        "黑色素瘤",
        "食管癌",
        "宫颈癌",
        "鼻咽癌",
        "脑癌",
        "血癌",
        "骨癌",
        "直肠癌",
        "鳞状细胞癌",
        "甲状腺癌",
        "睾丸癌",
        "前列腺癌",
        "系统性红斑狼疮",
      ],
    };
  },
  methods: {
    onCloseClick() {
      this.show = false;
    },
    onElseClick() {
      this.show = true;
    },

    onChangeClick(index, item) {
      if (this.selectlist.indexOf(item) != -1) {
        this.selectlist.splice(this.selectlist.indexOf(item), 1);
      } else {
        this.selectlist.push(item);
      }
    },

    onConfirmClick() {
      if (this.value == "") {
        return false;
      }
      if (this.selectlist.indexOf(this.value) != -1) {
        Toast("请勿重复添加！");
        return;
      } else {
        this.list.push(this.value);
        this.selectlist.push(this.value);

        Toast("添加成功！");
      }
      this.value = "";
    },
    onNextClick() {
      this.$router.push({ name: "detail", params: { list: this.selectlist } });
    },
  },
};
</script>

<style lang="less">
.content {
  width: 750px;
  // margin-top: 40px;
  .van-button {
    width: 620px;
    margin-top: 174px;
    margin-left: 66px;
    margin-bottom: 140px;
  }
}
.first {
  margin-left: 66px;
  margin-top: 40px;
  font-size: 36px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
.title {
  margin-top: 24px;
  margin-left: 66px;
  font-size: 48px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  line-height: 48px;
  font-weight: bold;
  color: #333333;
}
.diseasetype {
  display: flex;
  flex-wrap: wrap;
  margin-left: 64px;
  margin-right: 64px;
  justify-content: space-between;
  margin-top: 48px;
  .item {
    display: inline-block;
    width: 188px;
    height: 72px;
    line-height: 72px;
    text-align: center;
    margin-bottom: 36px;
    background: #dddddd;
    border-radius: 60px;
    font-size: 28px;
    font-family: Source Han Sans CN;
    color: #333333;
    font-weight: 400;
  }
  .active {
    background-color: #386ce2;
    color: white;
  }
  div:nth-child(22) {
    width: 336px;
  }
  div:nth-last-child(1) {
    background: #e6a448;

    color: white;
  }
}

.van-dialog__content {
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 30px;
  display: flex;
  align-items: center;
}
.van-goods-action-button--danger {
  background: #386ce2;
  border-radius: 50px;
  height: 32px;
  font-size: 32px;
  font-weight: 400;
  line-height: 58px;
}
.van-goods-action,
.van-dialog__footer {
  width: 430px;
  height: 80px;
  padding: 0;
  margin: auto;
}
.elsetitle {
  text-align: center;
  font-size: 36px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  line-height: 36px;
  color: #333333;
}
.input {
  margin: 96px 54px;
  width: 500px;
  height: 94px;
  background: #e6e6e6;
  border-radius: 16px;
}
.disabled {
  background: #3f3e3e;
  border: 1px solid #3f3e3e;
}
</style>
