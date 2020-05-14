$(function () {
    var maskQuantityChart = echarts.init(document.getElementsByClassName('stock-chart')[0]);
    var equipmentChart = echarts.init(document.getElementsByClassName('chartOne')[0]);
    var equipmentChartTwo = echarts.init(document.getElementsByClassName('chartTwo')[0]);
    var equipmentChartThree = echarts.init(document.getElementsByClassName('chartThree')[0]);
    var equipmentChartFour = echarts.init(document.getElementsByClassName('chartFour')[0]);
    var knoutputChart = echarts.init(document.getElementsByClassName('knoutput-chart')[0]);
    var pmoutputChart = echarts.init(document.getElementsByClassName('pmoutput-chart')[0]);
    var environmentChartOne = echarts.init(document.getElementsByClassName('environment-chart-one')[0]);
    var environmentChartTwo = echarts.init(document.getElementsByClassName('environment-chart-two')[0]);
    var environmentChartThree = echarts.init(document.getElementsByClassName('environment-chart-three')[0]);
    var perUnitOutputChartOne = echarts.init(document.getElementsByClassName('perUnitOutput-chart-one')[0]);
    var perUnitOutputChartTwo = echarts.init(document.getElementsByClassName('perUnitOutput-chart-two')[0]);
    $.get('../json/indexData.json').done(function (data) {
        // 入库数量图表
        maskQuantityChart.setOption({
            series: [{
                // // 根据名字对应到相应的系列
                name: '实际入库',
                data: data.practical
            }, {
                name: '目标入库',
                data: data.target
            }]
        });


        // 设备稼动率图表
        // kn95口罩
        equipmentChart.setOption({
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //         type: 'shadow'
            //     }
            // },
            series: [{
                data: [{
                        value: data.knrun,
                        name: ((data.knrun/(data.knrun +data.knstop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },
                    {
                        value: data.knstop,
                        name: ((data.knstop/(data.knrun +data.knstop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },

                ],
            }]
        })
        // 平面口罩
        equipmentChartTwo.setOption({
            series: [{
                data: [{
                        value: data.pmrun,
                        name: ((data.pmrun/(data.pmrun +data.pmstop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },
                    {
                        value: data.pmstop,
                        name: ((data.pmstop/(data.pmrun +data.pmstop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },

                ],
            }]
        })
        // 耳带机1
        equipmentChartThree.setOption({
            series: [{
                data: [{
                        value: data.edonerun,
                        name: ((data.edonerun/(data.edonerun+data.edonestop))*100 ).toFixed(2)+ "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },
                    {
                        value: data.edonestop,
                        name: ((data.edonestop/(data.edonerun+data.edonestop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },

                ],
            }]
        })
        // 耳带机2
        equipmentChartFour.setOption({
            series: [{
                data: [{
                        value: data.edtworun,
                        name: ((data.edtworun/(data.edtworun +data.edtwostop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },
                    {
                        value: data.edtwostop,
                        name: ((data.edtwostop/(data.edtworun +data.edtwostop))*100).toFixed(2) + "%",
                        label: {
                            position: 'inner',
                            fontSize: 16
                        }
                    },

                ],
            }]
        })


        // 口罩机产量图表
        // kn95口罩产量
        knoutputChart.setOption({
            series: [{
                    data: data.knoutput
                },
                {
                    data: data.knoutput
                },
            ],
        })
        // 平面口罩产量
        pmoutputChart.setOption({
            series: [{
                data:[data.pmOneOutPut]
            },{
                data:[data.pmTwoOutPut]
            },{
                data:[data.pmThreeOutPut]
            }]
        })
        // // 平面口罩产量第一条生产线
        // pmoutputChartrOne.setOption({
        //     series: [{ //间距
        //             data: [positionLeft]
        //         },
        //         { //内

        //             data: [data.pmOneOutPut]
        //         },
        //         { //框
        //             data: [max],
        //         }
        //     ]
        // })
        // // 平面口罩产量第二条生产线
        // pmoutputChartrTwo.setOption({
        //     series: [{ //间距
        //             data: [positionLeft]
        //         },
        //         { //内

        //             data: [data.pmTwoOutPut]
        //         },
        //         { //框
        //             data: [max],
        //         }
        //     ]
        // })
        // // 平面口罩产量第三条生产线
        // pmoutputChartrThree.setOption({
        //     series: [{ //间距
        //             data: [positionLeft]
        //         },
        //         { //内

        //             data: [data.pmThreeOutPut]
        //         },
        //         { //框
        //             data: [max],
        //         }
        //     ]
        // })


        // 车间环境
        // 温度
        environmentChartOne.setOption({
            series: [{
                
                data: [{
                        value: data.environmentTemperature / 50 * 100,
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return + params.value*(50/100) + "°";
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '22',
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
                        value: 100 - data.environmentTemperature / 50 * 100,
                        // name: 'invisible',
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
        })


        // 湿度
        environmentChartTwo.setOption({
            series: [{
                
                data: [{
                        value: data.environmentHumidity,
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return + params.value + "%";
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '22',
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
                    },
                    {
                        value: 100 - data.environmentHumidity,
                        // name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: '#24375c'
                            },
                            emphasis: {
                                color: '#24375c'
                            }
                        }
                    }
                ]
            }]
        })

        // 大气压
        environmentChartThree.setOption({
            series: [{
                
                data: [{
                        value: data.environmentAirPressure/120*100,
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return + params.value*(120/100) + "Kpa";
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '22',
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
                    },
                    {
                        value: 100 - data.environmentAirPressure/120*100,
                        // name: 'invisible',
                        itemStyle: {
                    normal: {
                        color: '#453284'
                    },
                    emphasis: {
                        color: '#453284'
                    }
                }
                    }
                ]
            }]
        })


        // 单位产量
        // kn95
        perUnitOutputChartOne.setOption({
            series: (function () {
                var result = [];
                const knPerUnitOutput = data.knPerUnitOutput
                knPerUnitOutput.forEach(function (item) {
                    result.push({
                        // name: item.name,
                        // type: 'gauge',
                        // radius: '100%',
                        // startAngle: 225,
                        // endAngle: -45,
                        // min: 0,
                        // max: 150,
                        // axisLine: {
                        //     show: true,
                        //     lineStyle: {
                        //         width: 2,
                        //         shadowBlur: 5,
                        //         color: [
                        //             [0, 'transparent'],
                        //             [0.1, '#fff'],
                        //             [0.101, 'transparent'],
                        //             [0.2, '#fff'],
                        //             [0.201, 'transparent'],
                        //             [0.3, '#fff'],
                        //             [0.301, 'transparent'],
                        //             [0.4, '#fff'],
                        //             [0.401, 'transparent'],
                        //             [0.5, '#fff'],
                        //             [0.501, 'transparent'],
                        //             [0.6, '#fff'],
                        //             [0.601, 'transparent'],
                        //             [0.7, '#fff'],
                        //             [0.701, 'transparent'],
                        //             [0.8, '#fff'],
                        //             [0.801, 'transparent'],
                        //             [0.9, '#fff'],
                        //             [0.901, 'transparent'],
                        //             [1, '#fff']
                        //         ],
                        //     }
                        // },
                        // axisTick: {
                        //     show: 0,
                        // },
                        // splitLine: {
                        //     show: 0,
                        // },
                        // axisLabel: {
                        //     show: 0
                        // },
                        // pointer: {
                        //     show: false,
                        // },
                        // detail: {
                        //     show: false,
                        // },
                        // data: [{
                        //     show: false,
                        // }]
                    }, {
                        // name: item.name,
                        // type: 'gauge',
                        // radius: '65%',
                        // startAngle: 225,
                        // endAngle: -45,
                        // min: 0,
                        // max: 150,
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
                        // axisTick: {
                        //     show: 0,
                        // },
                        // splitLine: {
                        //     show: 0,
                        // },
                        // axisLabel: {
                        //     show: 0
                        // },
                        // pointer: {
                        //     width: 3,
                        //     show: true,
                        //     length: '97%'
                        // },
                        detail: {
                            // show: true,
                            // offsetCenter: ['0%', '80%'],
                            // textStyle: {
                            //     fontSize: 30,
                            //     color: '#fff'
                            // },
                            formatter: [
                                '{value}',
                                '{name|' + "MIN" + '}'
                            ].join('\n'),
                            // rich: {
                            //     name: {
                            //         fontSize: 12,
                            //         lineHeight: 30,
                            //         color: '#fff',
                            //         fontWeight: '100',
                            //     }
                            // }
                        },
                        // itemStyle: {
                        //     color: 'rgba(255, 36, 74,.3)',
                        //     borderColor: 'rgba(255, 36, 74,1)',
                        // },
                        data: [{
                            value: item.value
                        }]
                    }, 
                    // {
                    //     type: 'gauge',
                    //     radius: '92%',
                    //     splitNumber: 10,
                    //     axisTick: {
                    //         length: 3,
                    //     },
                    //     min: 0,
                    //     max: 150,
                    //     startAngle: 225,
                    //     endAngle: -45,
                    //     axisLine: {
                    //         show: true,
                    //         lineStyle: {
                    //             width: 2,
                    //             color: [
                    //                 [3,
                    //                     new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    
                    //                         {
                    //                             offset: 0,
                    //                             color: '#b6b6b7'
                    //                         },
                    //                         {
                    //                             offset: 1,
                    //                             color: '#b6b6b7'
                    //                         }
                    //                     ])
                    //                 ]
                    //             ],
                    //         }
                    //     },
                    //     axisLabel: {
                    //         distance: 1,
                    //         textStyle: {
                    //             color: '#fff',
                    //             fontSize: '6'
                    //         }
                    //     },
                    //     splitLine: {
                    //         show: true,
                    //         length: 4,
                    //         lineStyle: {
                    //             color: "#fff",
                    //         }
                    //     },
                    //     pointer: {
                    //         show: 0
                    //     },
                    //     detail: {
                    //         show: 0
                    //     }
                    // }, 
                    );
                });
    
                return result;
            })()
        })

        // 平面
        perUnitOutputChartTwo.setOption({
            series: (function () {
                var result = [];
                const pmPerUnitOutput = data.pmPerUnitOutput
                pmPerUnitOutput.forEach(function (item) {
                    result.push({
                        // name: item.name,
                        // type: 'gauge',
                        // radius: '100%',
                        // startAngle: 225,
                        // endAngle: -45,
                        // min: 0,
                        // max: 150,
                        // axisLine: {
                        //     show: true,
                        //     lineStyle: {
                        //         width: 2,
                        //         shadowBlur: 5,
                        //         color: [
                        //             [0, 'transparent'],
                        //             [0.1, '#fff'],
                        //             [0.101, 'transparent'],
                        //             [0.2, '#fff'],
                        //             [0.201, 'transparent'],
                        //             [0.3, '#fff'],
                        //             [0.301, 'transparent'],
                        //             [0.4, '#fff'],
                        //             [0.401, 'transparent'],
                        //             [0.5, '#fff'],
                        //             [0.501, 'transparent'],
                        //             [0.6, '#fff'],
                        //             [0.601, 'transparent'],
                        //             [0.7, '#fff'],
                        //             [0.701, 'transparent'],
                        //             [0.8, '#fff'],
                        //             [0.801, 'transparent'],
                        //             [0.9, '#fff'],
                        //             [0.901, 'transparent'],
                        //             [1, '#fff']
                        //         ],
                        //     }
                        // },
                        // axisTick: {
                        //     show: 0,
                        // },
                        // splitLine: {
                        //     show: 0,
                        // },
                        // axisLabel: {
                        //     show: 0
                        // },
                        // pointer: {
                        //     show: false,
                        // },
                        // detail: {
                        //     show: false,
                        // },
                        // data: [{
                        //     show: false,
                        // }]
                    }, {
                        // name: item.name,
                        // type: 'gauge',
                        // radius: '65%',
                        // startAngle: 225,
                        // endAngle: -45,
                        // min: 0,
                        // max: 150,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 15,
                                color: [
                                    [
                                        item.value / 150, 
                                        new echarts.graphic.LinearGradient(
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
                        // axisTick: {
                        //     show: 0,
                        // },
                        // splitLine: {
                        //     show: 0,
                        // },
                        // axisLabel: {
                        //     show: 0
                        // },
                        // pointer: {
                        //     width: 3,
                        //     show: true,
                        //     length: '97%'
                        // },
                        detail: {
                            // show: true,
                            // offsetCenter: ['0%', '80%'],
                            // textStyle: {
                            //     fontSize: 30,
                            //     color: '#fff'
                            // },
                            formatter: [
                                '{value}',
                                '{name|' + "MIN" + '}'
                            ].join('\n'),
                            // rich: {
                            //     name: {
                            //         fontSize: 12,
                            //         lineHeight: 30,
                            //         color: '#fff',
                            //         fontWeight: '100',
                            //     }
                            // }
                        },
                        // itemStyle: {
                        //     color: '#2f318b',
                        //     borderColor: '#1c4ba7',
                        // },
                        data: [{
                            value: item.value
                        }]
                     }, 
                    // {
                    //     type: 'gauge',
                    //     radius: '92%',
                    //     splitNumber: 10,
                    //     axisTick: {
                    //         length: 3,
                    //     },
                    //     min: 0,
                    //     max: 150,
                    //     startAngle: 225,
                    //     endAngle: -45,
                    //     axisLine: {
                    //         show: true,
                    //         lineStyle: {
                    //             width: 2,
                    //             color: [
                    //                 [3,
                    //                     new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    
                    //                         {
                    //                             offset: 0,
                    //                             color: '#b6b6b7'
                    //                         },
                    //                         {
                    //                             offset: 1,
                    //                             color: '#b6b6b7'
                    //                         }
                    //                     ])
                    //                 ]
                    //             ],
                    //         }
                    //     },
                    //     axisLabel: {
                    //         distance: 1,
                    //         textStyle: {
                    //             color: '#fff',
                    //             fontSize: '6'
                    //         }
                    //     },
                    //     splitLine: {
                    //         show: true,
                    //         length: 4,
                    //         lineStyle: {
                    //             color: "#fff",
                    //         }
                    //     },
                    //     pointer: {
                    //         show: 0
                    //     },
                    //     detail: {
                    //         show: 0
                    //     }
                    // }, 
                    );
                });
    
                return result;
            })()
        })
    });
})