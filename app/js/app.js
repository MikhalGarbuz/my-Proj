
var data = {
  labels: ['Vehicle and transport', 'Groceries and food', 'Clothes and shoes', 'Cafe and restaurants', 'Mobile and internet', 'House and services', 'Other expenses'],
  datasets: [{
    data: [25, 23, 18, 16, 15, 10, 9],
    backgroundColor: ['#ff5384', '#a178b6', '#57c065', '#525252', '#c5b4a1', '#6e86f1', '#f2cc30'],
    borderWidth: 0
  }]
};

// Chart configuration
var options = {
  cutout: 120,
  responsive: true,
  maintainAspectRatio: false,
  onAnimationComplete: function () {
    var ctx = this.chart.ctx;
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    var centerX = this.chart.width / 2;
    var centerY = this.chart.height / 2;

    ctx.fillText('Center Text', centerX, centerY);
  }
};

var a = 16 +"Volvo";
console.log(a);
//centerText plugins
const centerText = {
  id: 'CenterText',
  afterDatasetsDraw(chart){
    const { ctx }=chart;

    ctx.save();
    const x = chart.getDatasetMeta(0).data[0].x;
    const y = chart.getDatasetMeta(0).data[0].y;
    ctx.textAlign='center';
    ctx.font = 'bold 30px sans-serif'
    ctx.fillText("- 6567 usd", x, y)

  }
}
// Get the canvas element
var ctx = document.getElementById('myDoughnutChart').getContext('2d');



// Create a doughnut chart
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options,
  plugins: [centerText],
});


var ctx = document.getElementById('myLineChart').getContext('2d');

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
});
