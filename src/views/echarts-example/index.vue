<template>
  <div id="echarts-container">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <bar-chart :chartData="barChartData"/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <rose-chart />
        </div>
      </el-col>
    </el-row>
    <el-row style="background-color:#fff">
      <line-chart :chartData="lineChartData" />
    </el-row>
  </div>
</template>
<script>
// 引入组件
import BarChart from './components/BarChart'
import RoseChart from './components/RoseChart'
import LineChart from './components/LineChart'
export default {
  // 注册局部组件
  components:{
    BarChart,
    RoseChart,
    LineChart
  },
  data() {
    return {
      // 柱状图数据
      barChartData: {
        days: ['11.21', '11.22', '11.23', '11.24', '11.25', '11.26', '11.27'],
        data1: [100, 120, 161, 134, 105, 160, 165],
        data2: [120, 82, 91, 154, 162, 140, 145]
      },
      // 折线图数据
      lineChartData: {
        expectedData: [4, 9, 12, 11, 5, 2, 9],
        actualData: [10, 4, 3, 11, 13, 10, 7]
      }
    }
  }
}
</script>
<style lang="less" scoped>
#echarts-container{
  width: 100%;
  height: 100%;
  background-color: #F0F2F5;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>