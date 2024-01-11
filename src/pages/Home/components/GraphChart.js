import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

const GraphChart = ({title, nodeData, linkData, style = { width: '800px', height: '600px' }}) => {
    //保证dom可用，再进行图表的渲染
    const chartRef = useRef(null)
    useEffect(() => {
        //获取渲染图表的dom节点(JS中的原生获取方法）也可以使用react的方法，即钩子函数useRef
        const chartDom = chartRef.current
        //图表初始化，生成一个图表实例化对象
        const myChart = echarts.init(chartDom, 'dark');

        //准备图表的参数
        const option = {
            title: {
                text: title
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        show: true
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        fontSize: 20
                    },
                    data: nodeData,
                    // links: [],
                    links: linkData,
                    lineStyle: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            ]
        };

        //根据图表参数进行渲染
        option && myChart.setOption(option);
    }, [linkData, nodeData, title])
    return <div ref={chartRef} style={style}></div>

}

export { GraphChart }