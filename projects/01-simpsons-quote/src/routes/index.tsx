import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>The Simpsons App</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Inicio - The Simpsons App",
  meta: [
    {
      name: "description",
      content: "Página de inicio de la aplicación The Simpsons App",
    },
  ],
};
