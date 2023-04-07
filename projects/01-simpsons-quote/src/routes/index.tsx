import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen items-center justify-center text-center bg-brand p-4">
      <Logo classCustom="w-64 sm:w-[35rem]" />
      <h1 class="text-xl my-1 font-medium">
        Discover some of the most amazing Quotes from The Simpsons
      </h1>
      <div>
        <strong>DISCLAIMER:</strong> This is an unofficial app (even though it
        looks so cool!)
      </div>
      <Link class="btn my-4" href="/">
        Enter App
      </Link>
      <div class="flex gap-12">
        <img
          class="hidden md:block object-contain"
          src="./img/bart.png"
          alt="Bart Simpson"
        />
        <img
          class="hidden md:block object-contain mt-12"
          src="./img/homer.png"
          alt="Homer Simpson"
        />
        <img
          class="object-contain mt-12 md:mt-0"
          src="./img/moe.png"
          alt="Moe"
        />
      </div>
    </div>
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
