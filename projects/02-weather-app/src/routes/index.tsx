import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { WiSwitcher } from "~/components/icons/wi-switcher";

export default component$(() => {
  const city = useSignal("Granada");

  return (
    <>
      <h1>
        The weather in <span>{city.value}</span>
      </h1>
      <WiSwitcher code="01d" />
      <WiSwitcher code="04n" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Weather App",
  meta: [
    {
      name: "description",
      content: "Descubre el tiempo de tu ciudad favorita con nuestra app",
    },
  ],
};
