type AccordionProps = {
  summary: string;
  children: React.ReactNode;
};
export default function Accordion({ summary, children }: AccordionProps) {
  return (
    <details className="text-center w-3/4 inline-block md:w-full md:text-start">
      <summary className="text-secondary-color font-bold cursor-pointer text-mobile-text xsm:text-[14px] lg:text-[18px]">
        {summary}
      </summary>
        <p className="mx-3 py-2 text-text-colors text-mobile-text border-b border-b-gray-400 xsm:text-[14px] md:text-desktop-text">
          {children}
        </p>
    </details>
  );
}
