(function map() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  window.dataList = [{
      name: "南海诸岛",
      value: 0
    },
    {
      name: "北京",
      value: 14.2
    }, {
      name: "安徽",
      value: 11.3
    }, {
      name: "山西",
      value: 9.7
    }, {
      name: "天津",
      value: 5.1
    }, {
      name: "福建",
      value: 8.3
    }, {
      name: "新疆",
      value: 4
    }, {
      name: "贵州",
      value: 10.8
    }, {
      name: "西藏",
      value: 2.8
    }, {
      name: "青海",
      value: 3.2
    },
    {
      name: "江苏",
      value: 19.7
    },
    {
      name: "湖北",
      value: 17.5
    },
    {
      name: "河北",
      value: 15.1
    },
    {
      name: "辽宁",
      value: 11.3
    },
    {
      name: "四川",
      value: 14.7
    },
    {
      name: "山东",
      value: 25.6
    },
    {
      name: "湖南",
      value: 12.4
    },
    {
      name: "甘肃",
      value: 6.3
    },
    {
      name: "内蒙古",
      value: 6.5
    },
    {
      name: "海南",
      value: 3.4
    },
    {
      name: "云南",
      value: 5.7
    },
    {
      name: "广东",
      value: 13.9
    },
    {
      name: "广西",
      value: 5.1
    },
    {
      name: "陕西",
      value: 11.5
    },
    {
      name: "黑龙江",
      value: 10.3
    },
    {
      name: "河南",
      value: 20.7
    },
    {
      name: "吉林",
      value: 9.1
    },
    {
      name: "重庆",
      value: 8
    },
    {
      name: "上海",
      value: 9.7
    },
    {
      name: "浙江",
      value: 10.8
    },
    {
      name: "宁夏",
      value: 4
    },
    {
      name: "江西",
      value: 8.2
    },
    {
      name: '台湾',
      value: 3
    },
    {
      name: '香港',
      value: 5
    },
    {
      name: '澳门',
      value: 5
    }
  ];
  var option1 = {
    // title: {
    //   text: "2021届各地市的考研人数预测(单位:万)",
    //   x: 'center',
    //   top: "30",
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 24
    //   }
    // },
    tooltip: {
      triggerOn: "click",
      formatter: function (e, t, n) {
        return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
      }
    },
    geo: {
      map: "china",
      roam: !1,
      scaleLimit: {
        min: 1,
        max: 2
      },
      zoom: 1,
      label: {
        normal: {
          show: !0,
          color: "#fff"
        }
      },
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: [{
      name: "预测人数(单位:万)",
      type: "map",
      geoIndex: 0,
      data: window.dataList
    }]
  };
  //跳转代码
  // myChart.on('click', function (params) {
  //   console.log(params.name);
  //   window.open(params.data.url);
  //   // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
  // });

  var colorList = [
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
      '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
      '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
      '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
      '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
      '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
      '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
      '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
      '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
      '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]
  ][2];

  var option2 = {
    // 图表标题
    title: {
      show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
      // text: '"新时代"主题图谱', //主标题文本，'\n'指定换行
      x: 'center', // 水平安放位置，默认为左对齐，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      y: 'bottom', // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#ccc', // 标题边框颜色
      borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
      padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
      // 接受数组分别设定上右下左边距，同css
      itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
      textStyle: {
        fontSize: 18,
        fontWeight: 'bolder',
        color: '#333' // 主标题文字颜色
      },
      subtextStyle: {
        color: '#aaa' // 副标题文字颜色
      }
    },
    // backgroundColor: '#fff',
    tooltip: {},
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 150,
        edgeLength: 6
      },
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      data: [{
          "name": "2021考研",
          "value": 2373,
          "symbolSize": 48,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[0],
              "color": colorList[0]
            }
          }
        }, {
          "name": "考研成绩公布",
          "value": 5449,
          "symbolSize": 73,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[1],
              "color": colorList[1]
            }
          }
        }, {
          "name": "考研经验分享",
          "value": 2289,
          "symbolSize": 67,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[2],
              "color": colorList[2]
            }
          }
        }, {
          "name": "考研上岸后最大的感受",
          "value": 2518,
          "symbolSize": 50,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[3],
              "color": colorList[3]
            }
          }
        }, {
          "name": "考研复试网上咨询开始",
          "value": 4730,
          "symbolSize": 88,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[4],
              "color": colorList[4]
            }
          }
        }, {
          "name": "研究生扩招",
          "value": 339,
          "symbolSize": 68,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[14],
              "color": colorList[14]
            }
          }
        }, {
          "name": "研究生本科生均扩招",
          "value": 671,
          "symbolSize": 62,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[15],
              "color": colorList[15]
            }
          }
        }, {
          "name": "考研英语",
          "value": 27000,
          "symbolSize": 114,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[16],
              "color": colorList[16]
            }
          }
        }, {
          "name": "考研调剂",
          "value": 10777000,
          "symbolSize": 130,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[17],
              "color": colorList[17]
            }
          }
        }, {
          "name": "考研成绩",
          "value": 92000,
          "symbolSize": 123,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[18],
              "color": colorList[18]
            }
          }
        }, {
          "name": "考研国家线",
          "value": 20000,
          "symbolSize": 141,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[19],
              "color": colorList[19]
            }
          },
          "url": "https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1"
        },
        {
          "name": "考研上岸",
          "value": 1952,
          "symbolSize": 55,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[5],
              "color": colorList[5]
            }
          }
        }, {
          "name": "决战考研",
          "value": 926,
          "symbolSize": 70,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[6],
              "color": colorList[6]
            }
          }
        }, {
          "name": "考研云复试该怎么准备",
          "value": 4536,
          "symbolSize": 67,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[7],
              "color": colorList[7]
            }
          }
        }, {
          "name": "医学考研",
          "value": 750,
          "symbolSize": 47,
          "draggable": true,
          "itemStyle": {
            "normal": {
              "shadowBlur": 100,
              "shadowColor": colorList[8],
              "color": colorList[8]
            }
          }
        }
        , {
          "name": "专升本硕士研究生共扩招51.1万",
          "value": 8694000,
          "symbolSize": 134,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[12],
                  "color": colorList[12]
              }
          }
      }, {
          "name": "湖南2020年研究生扩招5%",
          "value": 5668,
          "symbolSize": 75,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[13],
                  "color": colorList[13]
              }
          }
      }, {
          "name": "多所高校公布2020硕士研究生扩招",
          "value": 339,
          "symbolSize": 68,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[14],
                  "color": colorList[14]
              }
          }
      }, {
          "name": "河南全日制研究生扩招20%以上",
          "value": 671,
          "symbolSize": 62,
          "draggable": true,
          "itemStyle": {
              "normal": {
                  "shadowBlur": 100,
                  "shadowColor": colorList[15],
                  "color": colorList[15]
              }
          }
      }, 
      ]
    }]
  }
  myChart.setOption(option1);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  $('a').on('click', function () {
    myChart.clear();
    if ($(this).index() == 2) {
      $(".map span").html("微博热搜话题");
      myChart.setOption(option2);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    } else {
      $(".map span").html("2021各省报考预测");
      myChart.setOption(option1);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }
  })
})();