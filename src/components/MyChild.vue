<template>
  <van-popup v-model="state" round>
    <div class="tip">
      <a
        href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4Njg3NjE5MQ==#wechat_redirect"
      >
        <img src="../assets/button.png" class="btn" alt="" @click="onClick" />
      </a>
    </div>
  </van-popup>
</template>

<script>
export default {
  data() {
    return {
      state: false,
      img: require("../assets/tip.png"),
    };
  },
  props: {},
  methods: {
    show() {
      this.state = true;
    },
    onClick() {
      this.state = false;
    },
  },
};
</script>

<style lang="less" scoped>

.tip {
  
  width: 608px;
  height:690px;
  background-image: url("../assets/tip.png");
  display: flex;
  justify-content: center;
  align-items: center;
  background-size:608px 690px;
}

.btn {
  margin-top: 546px;
  width: 430px;
  height: 80px;
}
.van-popup{

  background-color: rgba(60,104,205,0.1);
}
</style>
