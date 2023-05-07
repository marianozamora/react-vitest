type AccordionProps = {
    children: React.ReactNode;
    title: string;
};

function Accordion({ title, children }) {
  return (
    <div {title}>
      <div>{children}</div>
    </div>
  );
}