import { component$, useSignal } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { fetchSimpsons } from "~/api/fetchSimpsons";
import Container from "~/components/container";
import { IconQuote } from "~/components/icons/icon-quote";
import { Character } from "~/types/types";

export const useCharacters = routeLoader$(async () => {
  try {
    return await fetchSimpsons();
  } catch (error) {
    console.error(error);
    return [];
  }
});

export default component$(() => {
  const selectedCharacter = useSignal({});
  const { value: characters } = useCharacters();
  const filteredCharacters = getDifferentFilteredCharacters(characters);

  function getDifferentFilteredCharacters(characters: Character[]) {
    const uniqueCharacters = new Set();

    return characters
      .filter((user: Character) => user.characterDirection === "Right")
      .filter((user: Character) => {
        if (uniqueCharacters.has(user.character)) {
          return false;
        } else {
          uniqueCharacters.add(user.character);
          return true;
        }
      });
  }

  return (
    <Container classCustom="my-8 flex flex-col items-center justify-center gap-8">
      <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl"> The Simpson Quote App</h1>
        <p>Click on the quote of your favorite character</p>
      </div>
      <ul class="grid-container">
        {filteredCharacters?.slice(0, 12).map((user: Character) => (
          <li>
            <figure class="overflow-hidden relative">
              <picture class="max-w-[150px] max-h-[150px] border border-black flex bg-brand overflow-hidden">
                <img
                  class="max-w-full object-cover object-top translate-x-4"
                  src={user.image}
                  alt={user.character}
                />
              </picture>
              <button
                onClick$={() => (selectedCharacter.value = user)}
                class="border border-black bg-white absolute right-0 bottom-[20px] cursor-pointer hover:bg-gray-50"
              >
                <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
              </button>
              <figcaption class="text-sm">{user.character}</figcaption>
            </figure>

            {selectedCharacter.value == user ? (
              <div class="z-10 fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-75 transition-opacity">
                <div class="relative pt-20 px-12 pb-12 bg-white max-w-[300px] w-full">
                  <button
                    class="btn btn-contrast absolute top-5 right-5"
                    onClick$={() => (selectedCharacter.value = {})}
                    aria-label="Close Quote Character"
                  >
                    X
                  </button>
                  <blockquote class="flex flex-col gap-2">
                    "{user.quote}" <i>{user.character}</i>
                  </blockquote>
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <Link reload class="btn btn-brand">
        New quotes
      </Link>
    </Container>
  );
});

export const head: DocumentHead = {
  title: "Home - The Simpsons App",
  meta: [
    {
      name: "description",
      content: "Página de home de la aplicación The Simpsons App",
    },
    {
      name: "og:title",
      content: "Home - The Simpsons App",
    },
    {
      name: "og:description",
      content: "Página de home de la aplicación The Simpsons App",
    },
    {
      name: "og:image",
      content:
        "https://simpsons-qwik-curso-avanzado.vercel.app/img/thumbnail.png",
    },
    {
      name: "og:url",
      content: "https://simpsons-qwik-curso-avanzado.vercel.app/",
    },
    {
      name: "keywords",
      content: "The Simpsons, Quotes, App",
    },
    {
      name: "author",
      content: "manuelsanchezweb",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Home - The Simpsons App",
    },
    {
      name: "twitter:description",
      content: "Página de home de la aplicación The Simpsons App",
    },
    {
      name: "twitter:image",
      content:
        "https://simpsons-qwik-curso-avanzado.vercel.app/img/thumbnail.png",
    },
  ],
};
