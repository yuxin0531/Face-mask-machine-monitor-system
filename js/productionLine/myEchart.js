var productionLineChartArr = []
function initProductionLineEcharts() {
    productionLineChartArr[0] = echarts.init(document.getElementsByClassName('productionLine-equipment-chart')[0]);
    productionLineChartArr[1] = echarts.init(document.getElementsByClassName('productionLine-perUnitOutput-chart')[0]);
    productionLineChartArr[2] = echarts.init(document.getElementsByClassName('productionLine-hourly-output')[0]);
    // // 设备稼动率图表
    // var productionLineMaskQuantityChart = echarts.init(document.getElementsByClassName('productionLine-equipment-chart')[0]);
    // // 单位产量图表
    // var productionLineperUnitOutputChart = echarts.init(document.getElementsByClassName('productionLine-perUnitOutput-chart')[0]);
    // // 每小时产量
    // var productionLineOutPutChart = echarts.init(document.getElementsByClassName('productionLine-hourly-output')[0]);
   
    
    // 设备稼动率图表
    productionLineMaskQuantityOption = {

        // title: {
        //     text: 'KN95口罩',
        //     bottom: 10,
        //     left: 'center',
        //     textStyle: {
        //         color: '#3ed3e0',
        //         fontSize: '25',
        //         fontWeight: 'normal',
        //         lineHeight: 0
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        // legend: {
        //     left: 'left',
        //     textStyle: { // 图列内容样式
        //         color: '#3b9ca4', // 字体颜色
        //     },
        // },
        series: [{
            type: 'pie',
            radius: '86%',
            center: ['50%', '50%'],
            label: {
                normal: {
                        show: true,
                        fontSize: 22,
                        position:'inner', //标签的位置
                        formatter: '{d}%'
                }
        },
            data:[
                {value:360, name:'运行时间'},
                {value:100, name:'停机时间'}
        ],
            // data: [{
            //         value: 75,
            //         name: "75%",
            //         label: {
            //             position: 'inner',
            //             fontSize: 36
            //         }
            //     },
            //     {
            //         value: 25,
            //         name: "26%",
            //         label: {
            //             position: 'inner',
            //             fontSize: 36
            //         }
            //     },

            // ],
            // emphasis: {
            //     itemStyle: {
            //         shadowBlur: 10,
            //         shadowOffsetX: 0,
            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //     }
            // }
            labelLine: {
                normal: {
                    show: false
                }
            },
        }],
        color: [
            '#50a4db',
            '#336db4',

        ],
    };

    // 单位产量
    var demoData = [{
        name: 'MIN',
        unit: '%',
        value: 121,
    }, ];
    productionLineperUnitOutputOption = {
        title: {
            show: true
        },
        // grid: {
        //     left: "0",
        //     top: "0",
        //     right: "0",
        //     bottom: "0",
        //     // width: "auto",
        //     // height: "auto",
        //     // containLabel: true
        // },
        // backgroundColor: '#010101',
        series: (function () {
            var result = [];

            demoData.forEach(function (item) {
                result.push({
                    name: "MIN",
                    type: 'gauge',
                    radius: '100%',
                    startAngle: 225,
                    endAngle: -45,
                    // min: 0,
                    // max: 150,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 5,
                            color: [
                                [0, 'transparent'],
                                [0.1, '#fff'],
                                [0.101, 'transparent'],
                                [0.2, '#fff'],
                                [0.201, 'transparent'],
                                [0.3, '#fff'],
                                [0.301, 'transparent'],
                                [0.4, '#fff'],
                                [0.401, 'transparent'],
                                [0.5, '#fff'],
                                [0.501, 'transparent'],
                                [0.6, '#fff'],
                                [0.601, 'transparent'],
                                [0.7, '#fff'],
                                [0.701, 'transparent'],
                                [0.8, '#fff'],
                                [0.801, 'transparent'],
                                [0.9, '#fff'],
                                [0.901, 'transparent'],
                                [1, '#fff']
                            ],
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: false,
                    },
                    detail: {
                        show: false,
                    },
                    data: [{
                        show: false,
                    }]
                }, {
                    name: "MIN",
                    type: 'gauge',
                    radius: '65%',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 150,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 28,
                            color: [
                                [
                                    item.value / 150, new echarts.graphic.LinearGradient(
                                        0, 1, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(255, 36, 74,0)',
                                            }, {
                                                offset: 0.3,
                                                color: 'rgba(255, 36, 74,0)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(255, 36, 74,1)',
                                            }
                                        ]
                                    )
                                ],
                                [
                                    1, 'rgba(255,255,255,.0)'
                                ]
                            ],
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        width: 3,
                        show: true,
                        length: '97%'
                    },
                    detail: {
                        show: true,
                        offsetCenter: ['0%', '70%'],
                        textStyle: {
                            fontSize: 56,
                            color: '#fff'
                        },
                        formatter: [
                            '{value}',
                            '{name|' + "MIN" + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 30,
                                lineHeight: 70,
                                color: '#fff',
                                fontWeight: '500',
                            }
                        }
                    },
                    itemStyle: {
                        color: 'rgba(255, 36, 74,.3)',
                        borderColor: 'rgba(255, 36, 74,1)',
                    },
                    data: [{
                        value: item.value
                    }]
                }, {
                    type: 'gauge',
                    radius: '92%',
                    splitNumber: 10,
                    axisTick: {
                        length: 3,
                    },
                    min: 0,
                    max: 150,
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            color: [
                                [3,
                                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [

                                        {
                                            offset: 0,
                                            color: '#b6b6b7'
                                        },
                                        {
                                            offset: 1,
                                            color: '#b6b6b7'
                                        }
                                    ])
                                ]
                            ],
                        }
                    },
                    
                    axisLabel: {
                        distance: 1,
                        textStyle: {
                            color: '#fff',
                            fontSize: '6'
                        }
                    },
                    splitLine: {
                        show: true,
                        length: 4,
                        lineStyle: {
                            color: "#fff",
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                }, );
            });

            return result;
        })()
    };

    // 每小时产量
    const createSvg = (shadowColor, shadowBlur) => {
        `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 32 128"
        xml:space="preserve"
    >
        <style>
            .st2 {
                fill: transparent;
                stroke: ${shadowColor};
                stroke-width: ${shadowBlur}px;
                filter: url(#chart-inset-shadow);
            }
        </style>
        <defs>
            <filter id="chart-inset-shadow"  width="60%" height="200%" x="22%" y="-50%">
        		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${shadowBlur * 0.75}" />
        		<feMerge>
        			<feMergeNode in="gass" />
        		</feMerge>
        	</filter>
        </defs>
        <path class="st2" d="M0 0 L32 0 L32 128 L0 128 Z" />
    </svg>
`
    };

    const svgString = createSvg('#156dff', 8);
    const svg = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8"
    });

    const DOMURL = window.URL || window.webkitURL || window;
    const insetShadowUrl = DOMURL.createObjectURL(svg);
    const dataSet = [
        ['01', '02', '03', '04', '05', '06', '07','08', '09', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        [120, 200, 150, 80, 70, 110, 130,150,138,210,178,255,144,168,125,158,189,163,123,199,207,206,209,201]
    ];
    productionLineOutPutOption = {
        // 鼠标悬停柱状图出现数据
        tooltip: {
            // 显示格式
            formatter: '时间 : {b}点<br />产量 : {c}个',
            // show:false,
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "4%",
            top: "10%",
            right: "0",
            bottom: "6%",
            width: "auto",
            height: "auto",
            // containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                // show: true,
                color: 'rgba(255,255,255, 0.5)',
            },
            splitLine: {
                show: false,
            },
            data: dataSet[0],
        },
        yAxis: {
            
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                // show: false,
                color: 'rgba(255,255,255, 0.5)',
                 // 格式化y轴刻度
                // formatter: function (value) {
                //     return (value / 1000) + "(千)"
                // }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(255,255,255,0.1)',
                    width: 2,
                },
            },
            
       
        },
        series: [{
                
                data: dataSet[1],
                type: 'pictorialBar',
                symbol: 'image://' + insetShadowUrl,
                barWidth: 50,
            },
            {
                
                data: dataSet[1],
                type: 'bar',
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: 14,
                },
                barWidth: 20,
                itemStyle: {
                    color: 'transparent',
                    borderWidth: 3,
                    borderColor: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#156dff'
                            },
                            {
                                offset: 1,
                                color: '#00eaeb'
                            },
                        ]
                    ),
                    shadowColor: 'blue',
                    shadowBlur: 12,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
        ],
    };

    // 设备稼动率图表
    productionLineChartArr[0].option = productionLineMaskQuantityOption;
    productionLineChartArr[0].setOption(productionLineMaskQuantityOption);
    // 单位产量
    productionLineChartArr[1].option=productionLineperUnitOutputOption;
    productionLineChartArr[1].setOption(productionLineperUnitOutputOption);
    // 每小时产量
    productionLineChartArr[2].option=productionLineOutPutOption;
    productionLineChartArr[2].setOption(productionLineOutPutOption);
}