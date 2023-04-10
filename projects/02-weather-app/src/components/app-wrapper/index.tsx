import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";

export const AppWrapper = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <Slot />
    </div>
  );
});
