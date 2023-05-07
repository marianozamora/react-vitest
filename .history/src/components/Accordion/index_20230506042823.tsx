function Accordion({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <div>{children}</div>
    </div>
  );
}