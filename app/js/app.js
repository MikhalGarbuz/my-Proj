
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
  cutoutPercentage: 50,
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

// Get the canvas element
var ctx = document.getElementById('myDoughnutChart').getContext('2d');

// Create a doughnut chart
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});