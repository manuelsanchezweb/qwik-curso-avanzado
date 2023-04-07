import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-brand flex flex-col justify-center items-center text-center py-8 px-5 gap-2 border border-black">
      <div class="text-sm">
        <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
      </div>
      <small>
        This app was done by
        <a
          title="Enlace a GitHub de msweb"
          href="https://github.com/manuelsanchezweb/qwik-simpsons-quote-app"
        >
          manuelsanchezweb
        </a>
      </small>
    </footer>
  );
});
