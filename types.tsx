export interface IWeather {
  cod: number;
  message: number;
  cnt: number;
  unit: boolean;
  city: { sunset: number; coord: { lat: number; lon: number }; state: string };
  list: {
    dt_txt: Date;
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
    };
    weather: { icon: string; main: string }[];
    wind: { gust: number };
  }[];
}

export interface ICity {
  sunset: number;
  coord: { lat: number; lon: number };
  state: string;
}

export interface IDate {
  date: string;
  temp_min: number;
  temp_max: number;
  description: string;
  icon: string;
  sunset?: string;
  humidity?: number;
  wind?: number;
  unit?: boolean;
  hourly: { time: string; temp: number; icon: string }[];
}

export interface IPropsWeather {
  weather: IWeather;
}

export interface IPropsDaily {
  daily: IDate;
}

export interface IPropsDates {
  dates: IDate[];
}

export interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  zoom: number;
  center: { lat: number; lng: number };
}

export interface IHeaderProps {
  toggler: () => void;
  color: boolean;
  setSelectedCity: () => void;
  setUnit: () => void;
  unit: boolean;
}
