#  Flags World React

React component for displaying world flags using separate SVG files.

- 🌐 Flags of all countries in SVG format.
- 🎨 Customizable sizes and styles.

## ✨ Installation
Installed the package from npm:

```sh
npm install flags-world-react
```

## ✨ Usage
Import the Flag component into your file JSX:

```jsx
import { Flag } from "flags-world-react";
```

Use the Flag component in your file JSX:

```jsx
<Flag countryCode="jp" />
```

```jsx
<Flag countryCode="jp" width={50} height={30} className="custom-flag" />
```

```jsx
<Flag countryCode="jp" style={{ borderRadius: "4px", border: "2px solid red" }} />

```

## ✨ Props

| Property     | Type     | Description                                   |
|--------------|----------|-----------------------------------------------|
| `countryCode`| `string` | Country code in format ISO 3166-1 alpha-2 (eg: us, fr, es) |
| `width`      | `number` | Flag width in pixels (default 100px)|
| `height`     | `number` | Flag height in pixels (default 60px)|
| `className`  | `string` | Custom class name for the flag element|
| `style`  | `object` | Inline style object to apply directly to SVG element|
