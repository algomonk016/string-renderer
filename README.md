# React String Renderer

A simple React component that takes a string prop and renders it.

## Installation

You can install this package directly from GitHub:

```bash
# Latest version
npm install github:algomonk016/string-renderer

# Specific version (recommended)
npm install github:algomonk016/string-renderer#v1.0.1

# Using yarn
yarn add github:algomonk016/string-renderer#v1.0.1
```

### Version-Specific Installation

```bash
# Install specific tagged version
npm install github:algomonk016/string-renderer#v1.0.1

# Install from specific branch
npm install github:algomonk016/string-renderer#main

# Install from specific commit
npm install github:algomonk016/string-renderer#59abb17

# Install using semver range
npm install github:algomonk016/string-renderer#semver:^1.0.0
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
git clone https://github.com/algomonk016/string-renderer.git
cd string-renderer

# Install dependencies
npm install

# Build the package
npm run build
```

## License

MIT 