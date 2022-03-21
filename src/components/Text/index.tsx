type TextOwnProps<E extends React.ElementType> = {
  children?: React.ReactNode;
  element?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = 'span'>({
  children,
  element,
}: TextProps<E>) => {
  const Element = element || 'span';
  return children ? <Element>{children}</Element> : <Element />;
};

export { Text };
