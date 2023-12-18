
setInterval(function(){

  donut.data.datasets.data=dataset;
  donut.update()
  console.log(donut.data.datasets.data)
},1000)
const DonutData={
  type: 'doughnut',
  data: {

      datasets: [{
          data: dataset,
          backgroundColor: [
              "rgb(180, 160, 137)",
              "rgb(254, 60, 114)",
              "rgb(52, 52, 52)",
              "rgb(147, 95, 168)",
              "rgb(72, 133, 239)",
              "rgb(238, 192, 9)",
              "rgb(4, 206, 45)"
          ],
          borderWidth: 0
      }],
  },
  options: {
      tooltips: {
          enabled: false,
      },
      legend: {
          display: false  // <- the important part
      },
      cutout: 95

  },
  plugins: {
      id: 'text',
      beforeDraw: function (chart, a, b) {
          let width = chart.width,
              height = chart.height,
              ctx = chart.ctx;

          ctx.restore();
          let fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          let text = "- 5000" + " USD",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
      },
  },
};
const donut = new Chart(document.getElementById('graph'),DonutData);


const labels = [
  'Mon',

  'Tue',

  'Wed',

  'Thu',

  'Fri',

  'Sat',

  'Sun'
];

const data = {
  labels: labels,
  datasets: [{
      backgroundColor: 'transparent',
      borderColor: 'rgb(0,143, 248)',
      pointBorderColor: 'transparent',
      data: [15, 25, 24, 35, 26, 25, 30,20,22,19,27],

  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
      plugins: {
          legend: {
              display: false
          },
      },
      scales:{
          y: {
              // beginAtZero: true,
              // suggestedMax: 500,
              grid: {
                  lineWidth: 0,
              }
          },
          x: {
              grid: {
                  lineWidth: 0,
              }
          }
          
      }


  }

};
const myChart = new Chart(
  document.getElementById('myChart'),
  config
)