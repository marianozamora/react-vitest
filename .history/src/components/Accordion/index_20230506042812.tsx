function Accordion({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <Inner>{children}</Inner>
    </div>
  );
}