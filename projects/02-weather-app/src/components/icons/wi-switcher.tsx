import { component$ } from "@builder.io/qwik";
import {
  WiCloud,
  WiDayCloud,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderStorm,
} from ".";

interface WiSwitcherProps {
  code:
    | "01d"
    | "01n"
    | "02d"
    | "02n"
    | "03d"
    | "03n"
    | "04d"
    | "04n"
    | "09d"
    | "09n"
    | "10d"
    | "10n"
    | "11d"
    | "11n"
    | "13d"
    | "13n"
    | string;
}

export const WiSwitcher = component$<WiSwitcherProps>(({ code }) => {
  switch (code) {
    case "01d":
      return <WiDaySunny />;
    case "01n":
      return <WiDaySunny />;
    case "02d":
      return <WiDayCloud />;
    case "02n":
      return <WiCloud />;
    case "03d":
      return <WiCloud />;
    case "03n":
      return <WiCloud />;
    case "04d":
      return <WiCloud />;
    case "04n":
      return <WiCloud />;
    case "09d":
      return <WiRain />;
    case "09n":
      return <WiRain />;
    case "10d":
      return <WiRain />;
    case "10n":
      return <WiRain />;
    case "11d":
      return <WiThunderStorm />;
    case "11n":
      return <WiThunderStorm />;
    case "13d":
      return <WiSnow />;
    case "13n":
      return <WiSnow />;
    default:
      return <WiDaySunny />;
  }
});
