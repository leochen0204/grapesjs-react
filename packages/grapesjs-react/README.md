# GrapesJS React

> **React 17 compatible fork** optimized for React 17.X projects.
> Based on the official [GrapesJS React wrapper](https://github.com/GrapesJS/react).

A [GrapesJS](https://grapesjs.com) wrapper for React that allows you to build custom and declarative UI for your editor.

## Installation

```sh
npm i grapesjs @leochen0204/grapesjs-react
```

## Compatibility

- React v17.X, v18.X, v19.X
- GrapesJS v0.22.5 or higher

## Usage

```tsx
import grapesjs from 'grapesjs';
import GjsEditor from '@leochen0204/grapesjs-react';

export default function Editor() {
  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      options={{
        height: '100vh',
        storageManager: false,
      }}
    />
  );
}
```

For more details, see the [official documentation](https://github.com/GrapesJS/react).

## Credits

Based on the official [GrapesJS React wrapper](https://github.com/GrapesJS/react) by the GrapesJS team.

## License

MIT
