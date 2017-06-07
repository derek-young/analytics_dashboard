import Chart from 'chart.js';
import store from '../../../../redux/store';


export function Data({ labels = [], datasets = [] }) {
  this.labels = labels;
  this.datasets = datasets;
}

export function DataSet({
  label = 'New DataSet',
  data = [],
  backgroundColor = [],
  borderColor = [],
  borderWidth = 1
}) {
  this.label = label;
  this.data = data;
  this.backgroundColor = backgroundColor;
  this.borderColor = borderColor;
  this.borderWidth = borderWidth
}

export function renderMediumChart({ data = {}, type = 'bar' }) {
  const medium = document.getElementById("medium-chart");

  new Chart(medium, {
    type,
    data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
