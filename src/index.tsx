import React from 'react';

export interface StringRendererProps {
  /**
   * The string to render
   */
  text: string;
  /**
   * Optional CSS class name to apply to the rendered element
   */
  className?: string;
  /**
   * Optional inline styles to apply to the rendered element
   */
  style?: React.CSSProperties;
  /**
   * HTML element type to render (default: 'span')
   */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * A simple React component that renders a string prop
 */
export const StringRenderer: React.FC<StringRendererProps> = ({ 
  text, 
  className, 
  style, 
  as: Component = 'span' 
}) => {
  return (
    <Component className={className} style={style}>
      {text}
    </Component>
  );
};

export default StringRenderer; 