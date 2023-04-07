import { Slot, component$ } from "@builder.io/qwik";

type ContainerProps = {
  classCustom?: string;
};

export default component$(({ classCustom }: ContainerProps) => {
  return (
    <main
      class={`flex w-full max-w-[1400px] px-5 md:px-20 md:mx-auto ${classCustom}`}
    >
      <Slot />
    </main>
  );
});
