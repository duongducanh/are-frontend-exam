interface Dataset {
  label?: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

export interface RecordChartDataTypes {
  datasets: Dataset[];
}

export interface RecordChartProps {
  recordData: RecordChartDataTypes;
}
