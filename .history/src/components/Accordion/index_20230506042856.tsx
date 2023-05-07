type AccordionProps = {
    children: React.ReactNode;
    title: string;
};

function Accordion({ title, ...restProps }) {
  return (
    <div {title}>
      <div>{children}</div>
    </div>
  );
}