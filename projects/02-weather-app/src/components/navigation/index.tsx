import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export const Navigation = component$(() => {
  useStylesScoped$(styles);
  return (
    <nav>
      <a href="/">
        QWIK <br /> WEATHER
      </a>
    </nav>
  );
});
