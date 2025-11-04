# Install Liquid Glass React

Get started with liquid glass React components in minutes.

## Using npm

```bash
npm install liquid-glass-react
```

## Using yarn

```bash
yarn add liquid-glass-react
```

## TypeScript Support

Liquid Glass React comes with built-in TypeScript declarations, providing full type safety and IntelliSense support out of the box.

# Liquid Glass React Usage Examples

Learn how to implement liquid glass React components in your applications.

## Basic Usage

```jsx
import LiquidGlass from 'liquid-glass-react'

function App() {
  return (
    <LiquidGlass>
      <div className="p-8">
        Your content here
      </div>
    </LiquidGlass>
  )
}
```

## Advanced Configuration

```jsx
<LiquidGlass
  displacementScale={100}
  blurAmount={0.08}
  saturation={180}
  elasticity={0.2}
  mode="prominent"
  cornerRadius={24}
  className="custom-glass"
>
  <Card title="Premium Content">
    <p>This card has enhanced glass effects</p>
  </Card>
</LiquidGlass>
```

## Different Modes

```jsx
// Standard mode - balanced effect
<LiquidGlass mode="standard">
  <Content />
</LiquidGlass>

// Polar mode - circular distortion
<LiquidGlass mode="polar">
  <Content />
</LiquidGlass>

// Prominent mode - stronger refraction
<LiquidGlass mode="prominent">
  <Content />
</LiquidGlass>

// Shader mode - custom shader effects
<LiquidGlass mode="shader">
  <Content />
</LiquidGlass>
```

# Liquid Glass React Props API

Complete liquid glass React components reference with all available props and configurations.

| Prop              | Type                                           | Default      | Description                                                 |
| ----------------- | ---------------------------------------------- | ------------ | ----------------------------------------------------------- |
| `children*`       | `ReactNode`                                    | -            | The content to be wrapped with the liquid glass effect      |
| `displacementScale` | `number`                                       | `70`         | Controls the intensity of the displacement effect           |
| `blurAmount`      | `number`                                       | `0.0625`     | Adjusts the blur/frosting level of the glass effect         |
| `saturation`      | `number`                                       | `140`        | Color saturation percentage                                 |
| `elasticity`      | `number`                                       | `0.15`       | Controls the "liquid" feel and elasticity of the effect     |
| `cornerRadius`    | `number`                                       | `999`        | Border radius in pixels                                     |
| `mode`            | `"standard" | "polar" | "prominent" | "shader"` | `"standard"` | Refraction mode that determines the visual style            |
| `className`       | `string`                                       | -            | Additional CSS classes for styling                          |
| `style`           | `CSSProperties`                                | -            | Inline styles for the component                             |
