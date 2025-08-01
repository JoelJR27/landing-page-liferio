type AccordionDividerProps = {
  children: React.ReactNode;
};
export default function AccordionDivider({ children }: AccordionDividerProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {/* Divide o número de acordeões de acordo com o número de colunas da grid. */}
      {children}
    </div>
  );
}
