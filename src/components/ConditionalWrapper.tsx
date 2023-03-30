import React from 'react';

type Props<T> = {
  condition: boolean;
  wrapper: React.FunctionComponent<T>;
  children?: React.ReactNode;
  wrapperProps: T;
};

/**
 *
 * a component that renders with the wrapper if condition is true
 */
function ConditionalWrapper<T>({ condition, wrapper, children, wrapperProps }: Props<T>) {
  if (condition) {
    const Component = wrapper;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...wrapperProps}>{children}</Component>;
  }
  return <div>{children}</div>;
}

export default ConditionalWrapper;
