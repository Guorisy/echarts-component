import ResizeListener from 'element-resize-detector';
export default {
  methods: {
    /* 对chart元素尺寸进行监听，当发生变化时同步更新echart视图 */
    chartEleResizeListener() {
      const chartInstance = ResizeListener({
        strategy: 'scroll',
        callOnAdd: true
      });
      chartInstance.listenTo(this.$el, () => {
        if (!this.chart) return;
        this.chart.resize();
      });
    },

    /* 当窗口缩放时，echart动态调整自身大小 */
    windowResizeListener() {
      if (!this.chart) return;
      this.chart.resize();
    }
  },
  mounted() {
    window.addEventListener('resize', this.windowResizeListener);
    this.chartEleResizeListener();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.windowResizeListener);
  }
}