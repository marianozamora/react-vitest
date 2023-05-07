type AccordionProps = {
    children: React.ReactNode;
    title: string;
};

function Accordion({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <div>{children}</div>
    </div>
  );
}