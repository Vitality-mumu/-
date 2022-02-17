<template>
  <div class="flash">
    <div class="bigimg">

       <img src="../../assets/btn.png" class="btn"  @click="onGoClick" alt="">
    </div>
   
  </div>
</template>

<script>
// import http from "../../http";
export default {
  mounted(){
    // this.test1()
  },
  methods: {
    onGoClick() {
      this.$router.push({ path: "/main/disease" });
    },
    //  async test1() {
    //   try {
    //     const res = await http.test();
    //     console.log(res);
    //   } catch {
    //     console.log("服务器错误");
    //   }
    // },
  },

 
};
</script>

<style lang="less" scoped>
.flash {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "SourceHanSansCN-Bold";
  height: 100vh;
  background-color: #0240a2;
}
.bigimg{
  width: 750px;
  // height:100%;
  height: 1334px;
  position: relative;
  background-image: url(../../assets/background.png);
  background-size: 750px 1334px;
  // background-size: contain;
  background-repeat: no-repeat;
  background-color: #0240a2;
}

.btn {
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 6%;
  height: 110px;
  display: inline-block;
}
</style>
