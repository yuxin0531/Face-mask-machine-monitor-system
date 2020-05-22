//全局变量 ，封装Echarts
var chartArr = [];

function initEcharts() {
    // 初始化
    //声明Echarts对象
    chartArr[0] = echarts.init(document.getElementsByClassName('stock-chart')[0]);
    chartArr[1] = echarts.init(document.getElementsByClassName('chartOne')[0]);
    chartArr[2] = echarts.init(document.getElementsByClassName('chartTwo')[0]);
    chartArr[3] = echarts.init(document.getElementsByClassName('chartThree')[0]);
    chartArr[4] = echarts.init(document.getElementsByClassName('chartFour')[0]);
    chartArr[5] = echarts.init(document.getElementsByClassName('knoutput-chart')[0]);
    chartArr[6] = echarts.init(document.getElementsByClassName('pmoutput-chart')[0]);
    chartArr[7] = echarts.init(document.getElementsByClassName('environment-chart-one')[0]);
    chartArr[8] = echarts.init(document.getElementsByClassName('environment-chart-two')[0]);
    chartArr[9] = echarts.init(document.getElementsByClassName('environment-chart-three')[0]);
    chartArr[10] = echarts.init(document.getElementsByClassName('perUnitOutput-chart-one')[0]);
    chartArr[11] = echarts.init(document.getElementsByClassName('perUnitOutput-chart-two')[0]);
    // 口罩入库数量图表
    maskOption = {
        legend: {
            data: ['实际入库', '目标入库'],
            textStyle: { // 图列内容样式
                color: '#41a1a8', // 字体颜色
            },
            left: '5%',
            // itemWidth:'5',
            // itemHeight:'5',
            // width:'40',
            // height:'60',
            // orient :'vertical'
        },
        xAxis: {
            type: 'category',
            data: ['KN95口罩', '平面口罩'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#41a1a8',
                    width: '2'
                }
            },
            // X轴标识的字体状态
            axisLabel: {
                show: true,
                // X轴标识文字距离x轴的距离
                margin: 25,
                textStyle: {
                    // x标识文字颜色和大小
                    color: '#fff',
                    fontSize: 16,

                }
            },
            // x轴标尺
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            name: 'K',
            splitLine: {
                show: true,
                // 在坐标轴里的线
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(65,161,168,0.3)',
                    width: 1,
                },
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#41a1a8',
                    width: 2,
                }
            },


        },


        series: [{
                name: '实际入库',
                type: 'bar',
                data: [100, 200],
                barWidth: '20%',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(80, 164, 219, 1)' // 0% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                label: {
                    show: true,
                    position: [-30, 0],
                    color: '#868e9c',
                    fontSize: 14,
                }
            },
            {
                name: '目标入库',
                type: 'bar',
                data: [140, 300],
                barWidth: '20%',
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0.1,
                            color: 'rgba(128, 80, 155, 1)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(112, 125, 187, 1)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(0, 192, 255, 1)' // 100% 处的颜色
                        }],
                        // globalCoord: false // 缺省为 false
                    }
                },
                label: {
                    show: true,
                    position: [40, 0],
                    color: '#fff',
                    fontSize: 14,
                }
            }
        ]
    };


    // 设备稼动率图表
    // KN95口罩
    equipmentOption = {
        title: {
            text: 'KN95口罩',
            bottom: 10,
            left: 'center',
            textStyle: {
                color: '#3ed3e0',
                fontSize: '16',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} 分钟({d}%)"
        },
        series: [{
            type: 'pie',
            // radius: '86%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    position: 'inner', //标签的位置
                    formatter: '{d}%'
                }
            },
            data: [{
                    value: 360,
                    name: '运行时间'
                },
                {
                    value: 100,
                    name: '停机时间'
                }
            ],
            // radius: '55%',
            // center: ['50%', '60%'],
            // data: [{
            //         value: 75,
            //         name: "75%",
            //         label: {
            //             position: 'inner',
            //             fontSize: 16
            //         }
            //     },
            //     {
            //         value: 25,
            //         name: "25%",
            //         label: {
            //             position: 'inner',
            //             fontSize: 16
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

    // 平面口罩
    equipmentOptionTwo = {
        title: {
            text: '平面口罩',
            bottom: 10,
            left: 'center',
            textStyle: {
                color: '#3ed3e0',
                fontSize: '16',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} 分钟({d}%)"
        },
        series: [{
            type: 'pie',
            // radius: '86%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    position: 'inner', //标签的位置
                    formatter: '{d}%'
                }
            },
            data: [{
                    value: 360,
                    name: '运行时间'
                },
                {
                    value: 100,
                    name: '停机时间'
                }
            ],
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

    // 耳带机1
    equipmentOptionThree = {
        title: {
            text: '耳带机1',
            bottom: 10,
            left: 'center',
            textStyle: {
                color: '#3ed3e0',
                fontSize: '16',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} 分钟({d}%)"
        },
        series: [{
            type: 'pie',
            // radius: '86%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    position: 'inner', //标签的位置
                    formatter: '{d}%'
                }
            },
            data: [{
                    value: 360,
                    name: '运行时间'
                },
                {
                    value: 100,
                    name: '停机时间'
                }
            ],
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

    // 耳带机2
    equipmentOptionFour = {
        title: {
            text: '耳带机2',
            bottom: 10,
            left: 'center',
            textStyle: {
                color: '#3ed3e0',
                fontSize: '16',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} 分钟({d}%)"
        },
        series: [{
            type: 'pie',
            // radius: '86%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    fontSize: 16,
                    position: 'inner', //标签的位置
                    formatter: '{d}%'
                }
            },
            data: [{
                    value: 360,
                    name: '运行时间'
                },
                {
                    value: 100,
                    name: '停机时间'
                }
            ],
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




    // 口罩机产量图表
    // kn95口罩产量
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
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        [120, 200, 150, 80, 70, 110, 130]
    ];
    knoutputOption = {
        grid: {
            left: "0",
            top: "12%",
            right: "0",
            bottom: "0",
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
                show: false,
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
                show: false,
                color: 'rgba(255,255,255, 0.5)',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
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

    // knoutputChart.getZr().on('click', params => {
    //     let pointInPixel = [params.offsetX, params.offsetY]
    //     console.log(pointInPixel);//位置

    //     if (knoutputChart.containPixel('grid', pointInPixel)) {
    //       let xIndex = knoutputChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
    //       console.log(xIndex)
    //     }
    //   })

    chartArr[5].on('click', function (params) {
        var ch = params.dataIndex+4
        // console.log(params.dataIndex)
        window.location.href = `../html/productionLine.html?ch=${ch}&type=0`
    })

    // 平面口罩产量
    pmoutputOption = {
        // tooltip: {
        //     show:false,
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     }
        // },

        grid: {
            left: '0%',
            right: '0%',
            // bottom: '0%',
            top: "20%",
            // containLabel: true
        },
        xAxis: {
            axisLine: {
                show: false
            },
            // type: 'value',
            // boundaryGap: [0, 0.01],
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            triggerEvent: true
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
        },
        series: [{
                // name: '2012年',
                barGap: '180%',
                //  barCategoryGap:'500%',
                barWidth: 20,
                type: 'bar',
                label: {
                    show: false,
                    normal: {
                        show: true,
                        position: 'right',
                        // padding: 10,
                        offset: [-70, -25],
                        fontSize: 16,
                        textStyle: {
                            color: '#fff'
                        },

                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
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
                    }
                },
                data: [19325]
            },
            {
                // name: '2011年',
                // barGap: '200%',
                type: 'bar',
                barWidth: 20,
                //   type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        // padding: 10,
                        offset: [-70, -25],
                        fontSize: 16,
                        textStyle: {
                            color: '#fff'
                        },

                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
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
                    }
                },
                data: [16889]
            },
            {
                // name: '2011年',
                barGap: '260%',
                type: 'bar',
                barWidth: 20,
                //   type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        // padding: 10,
                        offset: [-70, -25],
                        fontSize: 16,
                        textStyle: {
                            color: '#fff'
                        },

                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
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
                    }
                },
                data: [18526]
            },

        ]
    };
    chartArr[6].on('click', function (params) {
        // console.log(params.componentIndex)
        var ch =params.componentIndex+1
        window.location.href = `../html/productionLine.html?ch=${ch}&type=1`
    })

    //     if (knoutputChart.containPixel('grid', pointInPixel)) {

    //       let xIndex = knoutputChart.convertFromPixel({ index:0 }, [params.offsetX, params.offsetY])
    //       console.log(xIndex)
    //     }
    //   })
    // let positionLeft = 1,
    //     max = 100 + 39000 * positionLeft,
    //     value = 34501;
    // // 1
    // pmoutputOptionOne = {
    //     grid: {

    //         top: "30%",
    //         right: "1",
    //         bottom: "0",

    //         // containLabel: true
    //     },
    //     // backgroundColor: 'black', //背景必须与symbal颜色一样
    //     "xAxis": {
    //         type: 'value',
    //         "max": max,
    //         "splitLine": {
    //             "show": false
    //         },
    //         "axisLine": {
    //             "show": false
    //         },
    //         "axisLabel": {
    //             "show": false
    //         },
    //         "axisTick": {
    //             "show": false
    //         }
    //     },
    //     "yAxis": {
    //         "type": "category",
    //         "inverse": false,
    //         "data": [],
    //         "axisLine": {
    //             "show": false
    //         },
    //         "axisTick": {
    //             "show": false
    //         },
    //         "axisLabel": {
    //             "show": false
    //         }
    //     },
    //     "series": [

    //         { //间距
    //             type: 'bar',
    //             barWidth: 12,
    //             stack: 'b',
    //             legendHoverLink: false,
    //             itemStyle: {

    //                 normal: {
    //                     color: 'rgba(0,0,0,0)'
    //                 }
    //             },

    //             data: [positionLeft]
    //         },


    //         { //内
    //             type: 'bar',
    //             barWidth: 30,
    //             stack: 'b',
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: [238, -22],
    //                     textStyle: {
    //                         color: '#fff'
    //                     },
    //                     // formatter: function(e) {
    //                     //     return (e.value / (max - 2*positionLeft) * 100).toFixed(2) + "%"
    //                     // }
    //                 }
    //             },
    //             legendHoverLink: false,
    //             silent: true,
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 30,
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 1, 0, [{
    //                                 offset: 0,
    //                                 color: '#1c74fb'
    //                             },
    //                             {
    //                                 offset: 1,
    //                                 color: '#8ac5ec'
    //                             }
    //                         ]
    //                     )
    //                 }
    //             },

    //             data: [value]
    //         },
    //         { //框
    //             type: 'bar',
    //             barWidth: 14,
    //             barGap: '-110%',
    //             label: {
    //                 normal: {
    //                     show: false,
    //                     position: 'right',
    //                     textStyle: {
    //                         color: '#000'
    //                     }
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 30,
    //                     color: 'rgba(0,0,0,0)', //底色
    //                     borderWidth: 2,
    //                     borderColor: '#2761c3'
    //                 }
    //             },
    //             data: [max],
    //             z: 1,
    //         }
    //     ]
    // };

    // // let positionLeft = 1,
    // // maxTwo = 100 + 39000 * positionLeft,
    // // 2
    // valueTwo = 31482;
    // pmoutputOptionTwo = {
    //     grid: {

    //         top: "30%",
    //         right: "1",
    //         bottom: "0",

    //         // containLabel: true
    //     },
    //     // backgroundColor: 'black', //背景必须与symbal颜色一样
    //     "xAxis": {
    //         type: 'value',
    //         "max": max,
    //         "splitLine": {
    //             "show": false
    //         },
    //         "axisLine": {
    //             "show": false
    //         },
    //         "axisLabel": {
    //             "show": false
    //         },
    //         "axisTick": {
    //             "show": false
    //         }
    //     },
    //     "yAxis": {
    //         "type": "category",
    //         "inverse": false,
    //         "data": [],
    //         "axisLine": {
    //             "show": false
    //         },
    //         "axisTick": {
    //             "show": false
    //         },
    //         "axisLabel": {
    //             "show": false
    //         }
    //     },
    //     "series": [

    //         { //间距
    //             type: 'bar',
    //             barWidth: 12,
    //             stack: 'b',
    //             legendHoverLink: false,
    //             itemStyle: {

    //                 normal: {
    //                     color: 'rgba(0,0,0,0)'
    //                 }
    //             },

    //             data: [positionLeft]
    //         },


    //         { //内
    //             type: 'bar',
    //             barWidth: 30,
    //             stack: 'b',
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: [238, -22],
    //                     textStyle: {
    //                         color: '#fff'
    //                     },
    //                     // formatter: function(e) {
    //                     //     return (e.value / (max - 2*positionLeft) * 100).toFixed(2) + "%"
    //                     // }
    //                 }
    //             },
    //             legendHoverLink: false,
    //             silent: true,
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 30,
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 1, 0, [{
    //                                 offset: 0,
    //                                 color: '#1c74fb'
    //                             },
    //                             {
    //                                 offset: 1,
    //                                 color: '#8ac5ec'
    //                             }
    //                         ]
    //                     )
    //                 }
    //             },

    //             data: [valueTwo]
    //         },
    //         { //框
    //             type: 'bar',
    //             barWidth: 14,
    //             barGap: '-110%',
    //             label: {
    //                 normal: {
    //                     show: false,
    //                     position: 'right',
    //                     textStyle: {
    //                         color: '#000'
    //                     }
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 30,
    //                     color: 'rgba(0,0,0,0)', //底色
    //                     borderWidth: 2,
    //                     borderColor: '#2761c3'
    //                 }
    //             },
    //             data: [max],
    //             z: 1,
    //         }
    //     ]
    // };

    // // let positionLeft = 1,
    // // maxThree = 100 + 39000 * positionLeft,
    // // 3
    // valueThree = 29893;
    // pmoutputOptionThree = {
    //     grid: {

    //         top: "30%",
    //         right: "1",
    //         bottom: "0",

    //         // containLabel: true
    //     },
    //     // backgroundColor: 'black', //背景必须与symbal颜色一样
    //     "xAxis": {
    //         type: 'value',
    //         "max": max,
    //         "splitLine": {
    //             "show": false
    //         },
    //         "axisLine": {
    //             "show": false
    //         },
    //         "axisLabel": {
    //             "show": false
    //         },
    //         "axisTick": {
    //             "show": false
    //         }
    //     },
    //     "yAxis": {
    //         "type": "category",
    //         "inverse": false,
    //         "data": [],
    //         "axisLine": {
    //             "show": false
    //         },
    //         "axisTick": {
    //             "show": false
    //         },
    //         "axisLabel": {
    //             "show": false
    //         }
    //     },
    //     "series": [

    //         { //间距
    //             type: 'bar',
    //             barWidth: 12,
    //             stack: 'b',
    //             legendHoverLink: false,
    //             itemStyle: {

    //                 normal: {
    //                     color: 'rgba(0,0,0,0)'
    //                 }
    //             },

    //             data: [positionLeft]
    //         },


    //         { //内
    //             type: 'bar',
    //             barWidth: 30,
    //             stack: 'b',
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: [238, -22],
    //                     textStyle: {
    //                         color: '#fff'
    //                     },
    //                     // formatter: function(e) {
    //                     //     return (e.value / (max - 2*positionLeft) * 100).toFixed(2) + "%"
    //                     // }
    //                 }
    //             },
    //             legendHoverLink: false,
    //             silent: true,
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 30,
    //                     color: new echarts.graphic.LinearGradient(
    //                         0, 0, 1, 0, [{
    //                                 offset: 0,
    //                                 color: '#1c74fb'
    //                             },
    //                             {
    //                                 offset: 1,
    //                                 color: '#8ac5ec'
    //                             }
    //                         ]
    //                     )
    //                 }
    //             },

    //             data: [valueThree]
    //         },
    //         { //框
    //             type: 'bar',
    //             barWidth: 14,
    //             barGap: '-110%',
    //             label: {
    //                 normal: {
    //                     show: false,
    //                     position: 'right',
    //                     textStyle: {
    //                         color: '#000'
    //                     }
    //                 }
    //             },
    //             itemStyle: {
    //                 normal: {
    //                     barBorderRadius: 30,
    //                     color: 'rgba(0,0,0,0)', //底色
    //                     borderWidth: 2,
    //                     borderColor: '#2761c3'
    //                 }
    //             },
    //             data: [max],
    //             z: 1,
    //         }
    //     ]
    // };



    // 车间环境
    // 温度
    environmentOptionOne = {
        title: {
            text: '温度',
            bottom: 5,
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '14',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        // grid: {
        //     left: "0",
        //     top: "0",
        //     right: "0",
        //     bottom: "0",
        //     containLabel: true
        // },
        // backgroundColor: "#20263f",
        series: [{
            name: '温度',
            type: 'pie',
            clockWise: false,
            radius: [47, 57],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    shadowBlur: 0,
                    shadowColor: '#203665'
                }
            },
            hoverAnimation: false,
            // center: ['15%', '50%'],
            data: [{
                    value: 60,
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 20,
                                    fontWeight: "bold"
                                },
                                b: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 16
                                }
                            },
                            formatter: function (params) {
                                return "{a|" + params.value * (50 / 100) + "°}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ef45ac',
                            shadowColor: '#ef45ac',
                            shadowBlur: 0
                        }
                    }
                },
                {
                    value: 40,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#412a4e'
                        },
                        emphasis: {
                            color: '#412a4e'
                        }
                    }
                }
            ]
        }]
    }

    // 湿度
    environmentOptionTwo = {
        title: {
            text: '湿度',
            bottom: 5,
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '14',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        grid: {
            left: "0",
            top: "-10%",
            right: "0",
            bottom: "20%",
            containLabel: true
        },
        // backgroundColor: "#20263f",
        series: [{
            name: '湿度',
            type: 'pie',
            clockWise: false,
            radius: [47, 57],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    shadowBlur: 0,
                    shadowColor: '#203665'
                }
            },
            hoverAnimation: false,
            // center: ['15%', '50%'],
            data: [{
                value: 80,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 20,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 20
                            }
                        },
                        formatter: function (params) {
                            return "{a|" + params.value + "%}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#2c6cc4',
                        shadowColor: '#2c6cc4',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 20,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#24375c'
                    },
                    emphasis: {
                        color: '#24375c'
                    }
                }
            }]
        }]
    }

    // 气压
    environmentOptionThree = {
        title: {
            text: '气压',
            bottom: 5,
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '14',
                fontWeight: 'normal',
                lineHeight: 0
            }
        },
        grid: {
            left: "0",
            top: "-10%",
            right: "0",
            bottom: "20%",
            containLabel: true
        },
        // backgroundColor: "#613fd1",
        series: [{
            name: '第一个圆环',
            type: 'pie',
            clockWise: false,
            radius: [47, 57],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    shadowBlur: 0,
                    shadowColor: '#203665'
                }
            },
            hoverAnimation: false,
            // center: ['15%', '50%'],
            data: [{
                value: 84,
                label: {
                    normal: {
                        rich: {
                            a: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 20,
                                fontWeight: "bold"
                            },
                            b: {
                                color: '#fff',
                                align: 'center',
                                fontSize: 20
                            }
                        },
                        formatter: function (params) {
                            return "{a|" + Math.round(params.value * (120 / 100)) + "Kpa}";
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '14',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#613fd1',
                        shadowColor: '#613fd1',
                        shadowBlur: 0
                    }
                }
            }, {
                value: 16,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: '#453284'
                    },
                    emphasis: {
                        color: '#453284'
                    }
                }
            }]
        }]
    }



    // 单位产量
    var demoData = [{
        name: 'MIN',
        unit: '%',
        value: 66,
    }, ];
    perUnitOutputOptionOne = {
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
                    min: 0,
                    max: 150,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
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
                            width: 15,
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
                        offsetCenter: ['0%', '80%'],
                        textStyle: {
                            fontSize: 30,
                            color: '#fff'
                        },
                        formatter: [
                            '{value}',
                            '{name|' + "MIN" + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 12,
                                lineHeight: 30,
                                color: '#fff',
                                fontWeight: '100',
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

    // 平面
    var demoDataTwo = [{
        name: 'MIN',
        value: 88,
    }, ];
    perUnitOutputOptionTwo = {
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

            demoDataTwo.forEach(function (item) {
                result.push({
                    name: "MIN",
                    type: 'gauge',
                    radius: '100%',
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 150,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
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
                            width: 15,
                            color: [
                                [
                                    item.value / 100, new echarts.graphic.LinearGradient(
                                        0, 1, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(18, 105, 208,0)',
                                            }, {
                                                offset: 0.3,
                                                color: 'rgba(18, 105, 208,0)',
                                            },
                                            {
                                                offset: 1,
                                                color: '#1269d0',
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
                        width: 3, //指针长度
                        show: true,
                        length: '97%'
                    },
                    detail: {

                        show: true,
                        offsetCenter: ['0%', '80%'], // 改图表数据和单位距表心距离
                        textStyle: {
                            fontSize: 30,
                            color: '#fff'
                        },
                        formatter: [
                            '{value}',
                            '{name|' + "MIN" + '}'
                        ].join('\n'),
                        rich: {
                            name: {
                                fontSize: 12,
                                lineHeight: 30,
                                color: '#fff',
                                fontWeight: '100',
                            }
                        }
                    },
                    itemStyle: {
                        color: '#2f318b',
                        borderColor: '#1c4ba7',
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
    // 车间环境
    chartArr[0].option = maskOption
    chartArr[0].setOption(maskOption);

    // kn95口罩机
    chartArr[1].option = equipmentOption
    chartArr[1].setOption(equipmentOption);
    // 平面口罩机
    chartArr[2].option = equipmentOptionTwo
    chartArr[2].setOption(equipmentOptionTwo);
    // 耳带机1
    chartArr[3].option = equipmentOptionThree
    chartArr[3].setOption(equipmentOptionThree);
    // 耳带机2
    chartArr[4].option = equipmentOptionFour
    chartArr[4].setOption(equipmentOptionFour);
    // kn95口罩产量
    chartArr[5].option = knoutputOption
    chartArr[5].setOption(knoutputOption);
    // 平面口罩产量
    chartArr[6].option = pmoutputOption
    chartArr[6].setOption(pmoutputOption);
    // 车间环境
    // 温度
    chartArr[7].option = environmentOptionOne
    chartArr[7].setOption(environmentOptionOne);
    // 湿度
    chartArr[8].option = environmentOptionTwo
    chartArr[8].setOption(environmentOptionTwo);
    // 大气压
    chartArr[9].option = environmentOptionThree
    chartArr[9].setOption(environmentOptionThree);
    // 单位产量
    chartArr[10].option = perUnitOutputOptionOne
    chartArr[10].setOption(perUnitOutputOptionOne);
    chartArr[11].option = perUnitOutputOptionTwo
    chartArr[11].setOption(perUnitOutputOptionTwo);
}