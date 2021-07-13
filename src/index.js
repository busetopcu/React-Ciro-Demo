import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import treemap from "fusioncharts/fusioncharts.treemap";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Charts, PowerCharts, treemap, FusionTheme);

const dataSource = {
  chart: {
    /*caption: "Aylık Ciro",
    subcaption: "Last 12 mounths",
    xAxisName: "Mounth of Year",*/
    showValues: "0",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "OCAK"
        },
        {
          label: "ŞUBAT"
        },
        {
          label: "MART"
        },
        {
          label: "NİSAN"
        },
        {
          label: "MAYIS"
        },
        {
          label: "HAZİRAN"
        },
        {
          label: "TEMMUZ"
        },
        {
          label: "AĞUSTOS"
        },
        {
          label: "EYLÜL"
        },
        {
          label: "EKİM"
        },
        {
          label: "KASIM"
        },
        {
          label: "ARALIK"
        }
      ]
    }
  ],
  axis: [
    {
      title: "2021",
      tickWidth: "10",
      numberPrefix: "₺",
      divlineDashed: "1",
      dataset: [
        {
          seriesname: "2021",
          lineThickness: "3",
          data: [
            {
              value: "137500"
            },
            {
              value: "124350"
            },
            {
              value: "156700"
            },
            {
              value: "131450"
            },
            {
              value: "208300"
            },
            {
              value: "219900"
            },
            {
              value: "227500"
            },
            {
              value: "254300"
            },
            {
              value: "155900"
            },
            {
              value: "105650"
            },
            {
              value: "120950"
            },
            {
              value: "127500"
            }
          ]
        }
      ]
    },
    {
      title: "2020",
      axisOnLeft: "0",
      numDivlines: "8",
      tickWidth: "10",
      numberPrefix: "₺",
      divlineDashed: "1",
      dataset: [
        {
          seriesname: "2020",
          data: [
            {
              value: "22567"
            },
            {
              value: "21348"
            },
            {
              value: "24846"
            },
            {
              value: "19237"
            },
            {
              value: "20672"
            },
            {
              value: "23403"
            },
            {
              value: "30278"
            },
            {
              value: "26719"
            },
            {
              value: "21940"
            },
            {
              value: "24396"
            },
            {
              value: "22340"
            },
            {
              value: "25439"
            }
          ]
        }
      ]
    },
    {
      title: "2019",
      axisOnLeft: "0",
      numDivlines: "8",
      tickWidth: "10",
      numberPrefix: "₺",
      divlineDashed: "1",
      dataset: [
        {
          seriesname: "2019",
          data: [
            {
              value: "68473"
            },
            {
              value: "57934"
            },
            {
              value: "78925"
            },
            {
              value: "69213"
            },
            {
              value: "74892"
            },
            {
              value: "81123"
            },
            {
              value: "90086"
            },
            {
              value: "91174"
            },
            {
              value: "68934"
            },
            {
              value: "80934"
            },
            {
              value: "73634"
            },
            {
              value: "84453"
            }
          ]
        }
      ]
    },
    {
      title: "2018",
      axisOnLeft: "0",
      numDivlines: "5",
      tickWidth: "10",
      numberPrefix: "₺",
      divlineDashed: "1",
      dataset: [
        {
          seriesname: "2018",
          data: [
            {
              value: "68323"
            },
            {
              value: "51564"
            },
            {
              value: "77138"
            },
            {
              value: "65813"
            },
            {
              value: "77492"
            },
            {
              value: "81123"
            },
            {
              value: "90086"
            },
            {
              value: "91174"
            },
            {
              value: "65534"
            },
            {
              value: "89214"
            },
            {
              value: "69334"
            },
            {
              value: "83357"
            }
          ]
        }
      ]
    }
  ]
};


const chartConfigs = {
  type: "multiaxisline",
  width: 1300,
  height: 600,
  dataFormat: "json",
  dataSource: dataSource
};


function App() {
  return (
    <div className="App">
      <h1>AYLIK CİRO</h1>
      <ReactFC {...chartConfigs} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
