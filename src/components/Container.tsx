import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({ children, styles }) => {
  return <div style={styles}>{children}</div>;
};
