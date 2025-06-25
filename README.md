# React String Renderer

A simple React component that takes a string prop and renders it.

## Installation

You can install this package directly from GitHub:

```bash
npm install github:yourusername/react-string-renderer
```

Or with yarn:

```bash
yarn add github:yourusername/react-string-renderer
```

## Usage

```tsx
import React from 'react';
import { StringRenderer } from 'react-string-renderer';

function App() {
  return (
    <div>
      <StringRenderer text="Hello, World!" />
      
      {/* With custom styling */}
      <StringRenderer 
        text="Styled text" 
        className="my-custom-class"
        style={{ color: 'blue', fontSize: '18px' }}
      />
      
      {/* Render as different HTML element */}
      <StringRenderer 
        text="This is a heading" 
        as="h1"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | **Required.** The string to render |
| `className` | `string` | - | Optional CSS class name to apply |
| `style` | `React.CSSProperties` | - | Optional inline styles |
| `as` | `keyof JSX.IntrinsicElements` | `'span'` | HTML element type to render |

## Development

To set up the project for development:

```bash
# Clone the repository
git clone https://github.com/yourusername/react-string-renderer.git
cd react-string-renderer

# Install dependencies
npm install

# Build the package
npm run build
```

## License

MIT 