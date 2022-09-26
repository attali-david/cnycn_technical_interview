export interface ICity {
  name: string;
  lat: number;
  lon: number;
  state: string;
}

export interface IWeather {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  unit: boolean;
}

export interface IDate extends IHourly {
  date: string;
  temp_min: number;
  temp_max: number;
  description?: string;
  icon: string;
  sunset?: string;
  humidity?: number;
  wind?: number;
  unit?: boolean;
}

export interface IHourly {
  hourly?: Array<{ time: string; temp: number; icon: string }>;
}
