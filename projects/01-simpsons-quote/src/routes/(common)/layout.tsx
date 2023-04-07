import { component$, Slot } from "@builder.io/qwik";
import PageWrapper from "~/components/page-wrapper";

export default component$(() => {
  return (
    <PageWrapper>
      <header>Header</header>
      <Slot />
      <footer>Footer</footer>
    </PageWrapper>
  );
});
