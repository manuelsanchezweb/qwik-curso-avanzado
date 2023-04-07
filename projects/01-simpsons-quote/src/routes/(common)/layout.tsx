import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import PageWrapper from "~/components/page-wrapper";

export default component$(() => {
  return (
    <PageWrapper>
      <header>Header</header>
      <Slot />
      <Footer />
    </PageWrapper>
  );
});
