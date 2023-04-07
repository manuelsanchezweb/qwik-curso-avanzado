import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Container from "~/components/container";
import { IconQuote } from "~/components/icons/icon-quote";

export default component$(() => {
  return (
    <Container classCustom="my-8 flex flex-col items-center justify-center gap-8">
      <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl"> The Simpson Quote App</h1>
        <p>Click on the quote of your favorite character</p>
      </div>
      <ul class="grid-container">
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
        <li>
          <figure class="overflow-hidden relative">
            <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
              <img
                class="max-w-full object-cover object-top translate-x-4"
                src="../img/lisa.png"
                alt="Lisa Simpson"
              />
            </picture>
            <button class="border border-black bg-white absolute right-0 bottom-[24px] cursor-pointer hover:bg-gray-50">
              <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
            </button>
            <figcaption>Lisa Simpson</figcaption>
          </figure>
        </li>
      </ul>
      <Link class="btn btn-brand">New quotes</Link>
    </Container>
  );
});
