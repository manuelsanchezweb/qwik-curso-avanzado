import { component$, Resource, Signal, useResource$ } from "@builder.io/qwik";
import { getCityImage } from "~/api/getCityImage";
import { CityProps } from "~/types/types";

export const CityInfo = component$(({ city }: { city: Signal<string> }) => {
  const cityImageData = useResource$<CityProps>(({ track, cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    track(() => city.value);

    return getCityImage(city.value);
  });

  return (
    <Resource
      value={cityImageData}
      onPending={() => <>Cargando...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(cityImageData) => {
        return (
          <figure>
            <picture>
              <img
                src={cityImageData.urls.raw}
                alt={cityImageData.alt_description}
                class="weather--city"
              />
            </picture>
            <figcaption>
              Copyright from{" "}
              <a
                target="_blank"
                rel="nofollow noopener"
                href={cityImageData.user.social.portfolio_url}
              >
                {cityImageData.user.username}
              </a>
            </figcaption>
          </figure>
        );
      }}
    />
  );
});
