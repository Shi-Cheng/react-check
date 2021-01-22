import React, { Fragment, PureComponent } from 'react'
import EchartsAntd from '../../../component/Echarts'
import echarts from 'echarts'

var datas = [{
  "name": "生猪",
  "value": 6833885269.37
}, {
  "name": "柑橘",
  "value": 682341544.93
}, {
  "name": "禽蛋",
  "value": 3529643173.8
}, {
  "name": "大田",
  "value": 9773789.04
}, {
  "name": "水产",
  "value": 299226867.33
}, {
  "name": "物流",
  "value": 144844182.23
}, {
  "name": "其他",
  "value": 380040430.77
}];
function compare(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 < value1) {
      return 1;
    } else if (value2 > value1) {
      return -1;
    } else {
      return 0;
    }
  }
}
datas = datas.sort(compare("value")).reverse();
var seriesData = [];
var maxValue = datas[0].value;
var colors = ['#4983F5', '#3D993D', '#525CCC', '#3344FF', '#39ACE5', '#008099', '#2985CC']
for (var i = 0; i < datas.length; i++) {
  var ss = 120;
  if (i < 3) {
    ss = 100 - i * 10;
  } else if (3 <= i < 10) {
    ss = 100 - i * 10;
  } else {
    ss = 100 - i * 4;
  }
  var color = colors[i];
  var item = {
    "name": datas[i].name,
    "value": datas[i].value,
    "symbolSize": ss,
    "draggable": true,
    "itemStyle": {
      "normal": {
        "shadowBlur": 10,
        "shadowColor": color,
        "color": color
      }
    }
  };

  seriesData.push(item);
}

const chartData = {
  backgroundColor: "#1A1835",
  tooltip: {
    formatter: function (params) {
      var str = params.marker + "" + params.data.name + "</br>" +
        "交易额：" + params.data.value + "万元</br>";
      return str;
    }
  },
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
      repulsion: 130,
      edgeLength: 10
    },
    roam: true,
    label: {
      normal: {
        show: true
      }
    },
    data: seriesData
  }]
}

class LinesEcharts extends PureComponent {
  render() {
    return (
      <Fragment>
        <EchartsAntd
          elName='chartLinesEl-top'
          chartData={chartData}
          className='shadow-radius'
          height={400}
          width={'100%'}
          style={{ padding: 0 }} {...this.props}
        />
      </Fragment>
    )
  }
}

export default LinesEcharts