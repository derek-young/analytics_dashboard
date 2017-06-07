export function Data({ labels = [], datasets = [], ...rest }) {
  this.labels = labels;
  this.datasets = datasets;
}

export function DataSet({
  label = 'New DataSet',
  data = [],
  backgroundColor = [],
  borderColor = [],
  borderWidth = 1,
  ...rest
}) {
  this.label = label;
  this.data = data;
  this.backgroundColor = backgroundColor;
  this.borderColor = borderColor;
  this.borderWidth = borderWidth;

  for (let key in rest) {
    this[key] = rest[key];
  }
}
