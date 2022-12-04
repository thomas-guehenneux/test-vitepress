# Component

Guard UI provides bunch of authentication related UI components.

## Hierarchy

<ZoomImg src="./images/components.png" />

In this graph:

* Gray colored components are `base` components, you should not use them directly
* Green colored components are `general` components
* Blue colored components are `authentication` related components

## Init

To use Guard UI component, add the following line in your html file:

```html
<script src="https://unpkg.com/guard-ui/dist/index.mjs" type="module"></script>
```

## Adding component

Add components to your DOM by using custom tag:

```html
<g-button>Click me</g-button>
```

## Attribute

Component has attributes. For most attributes, simply convert CSS property name to camel case:

```html
<g-button backgroundColor="#F00">Click me</g-button>
```

There are component-specific attributes, please check the documentation for the particular component.
