type AccordionProps = {
    children: React.ReactNode;
    title: string;
};

function Accordion({ title, children }: AccordionProps) {
  return (
    <div {title}>
      <div>{children}</div>
    </div>
  );
}