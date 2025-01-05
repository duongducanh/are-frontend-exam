interface Dataset {
  label?: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
}

export interface RecordChartDataTypes {
  labels: string[];
  datasets: Dataset[];
}

export interface RecordChartProps {
  recordData: RecordChartDataTypes;
}
