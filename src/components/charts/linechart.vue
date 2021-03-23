<template>
    <div id="myChart" :style="{width: '1500px', height: '600px'}"></div>
</template>
 
<script>
    export default {
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '冬季销量统计' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子",'毛衣','秋裤','外套','短袖','手套','帽子','卫衣','棒球服']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20,15,22,33,8,6,21,22,39]
                }]
            });
        }
      }
    }
</script>