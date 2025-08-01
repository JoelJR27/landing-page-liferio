type AccordionContainerProps = {
  children: React.ReactNode;
};
export default function AccordionContainer({
  children,
}: AccordionContainerProps) {
  return (
    <section className="mb-10 flex flex-col items-center gap-4 md:grid md:grid-cols-2 md:w-3/4 md:items-start md: md:mx-auto lg:w-1/2">
      {children}
    </section>
  );
}
