import { component$, Signal } from "@builder.io/qwik";

export const WeatherInfo = component$(({ city }: { city: Signal<string> }) => {
  return <div>Weather info about {city.value}</div>;
});
