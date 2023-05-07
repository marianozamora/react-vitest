type AccordionProps = {
    children: React.ReactNode;
    title: string;
};

function Accordion({ title, ...restProps }) {
  return (
    <div {...restProps}>
      <div>{children}</div>
    </div>
  );
}