interface current_weather_interface {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

interface current_weather_units_interface {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

interface daily_interface {
  precipitation_sum: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weather_code: number[];
  windspeed_10m_max: number[];
}

interface daily_units_interface {
  precipitation_sum: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  weather_code: string;
  windspeed_10m_max: string;
}

interface hourly_interface {
  apparent_temperature: number[];
  precipitation: number[];
  relative_humidity_2m: number[];
  temperature_2m: number[];
  time: string[];
  weathercode: number[];
  windspeed_10m: number[];
}

interface hourly_units_interface {
  apparent_temperature: string;
  precipitation: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  time: string;
  weathercode: string;
  windspeed_10m: string;
}

export interface weather_data_interface {
  current_weather: current_weather_interface;
  current_weather_units: current_weather_units_interface;
  daily: daily_interface;
  daily_units: daily_units_interface;
  elevation: number;
  generationtime_ms: number;
  hourly: hourly_interface;
  hourly_units: hourly_units_interface;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
