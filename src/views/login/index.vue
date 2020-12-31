<template>
  <div id="login-container">
    <div class="login-form-wrap">
      <el-form class="login-form" ref="form" :model="form">
        <el-form-item>
          <h2 class="title-wrap">胡总后宫管理系统</h2>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-user" v-model="form.name"></el-input>
        </el-form-item><el-form-item>
          <el-input prefix-icon="el-icon-search" show-password v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" 
            style="width:100%;margin-top:30px;height:45px"
            @click="$router.push('/echarts-example')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <vue-particles
      class="login-bg"
      color="#39AFFD"
      :particleOpacity="0.5"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="180"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
      </vue-particles>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: 'admin  ',
        pwd: 'xxxsssxxxx'
      }
    }
  }
}
</script>
<style lang="less" scoped>
#login-container{
    width: 100%;
    height: 100%;
    /*如果想做背景图片 可以给标签一个class 直接添加背景图*/
    position: relative;
    background: #0e0e3d;
    .login-form-wrap{
      position: absolute;
      width: 540px;
      height: 330px;
      background-color: rgba(255,255,255,0.1);
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 60px;
      padding-top: 30px;
      color:#FCFCFF;
      border-radius: 5px;
      box-shadow: 0 0 10px  #ccc;
      .login-form{
        /deep/ .el-input__inner{
          display: block;
          height: 50px;
          width: 100%;
          background-color: rgba(0,0,0,0.1);
          color: #fff;
          outline: none;
        }
        .title-wrap{
          text-align: center;
          letter-spacing: 3px;
          font-size: 32px;
        }
      }
    }
    .login-bg{
      width: 100%;
      height: 100%;
    }
}
</style>