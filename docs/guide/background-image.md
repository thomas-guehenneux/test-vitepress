# Background Image

Every Guard component has a 'backgroundImage' attribute. The most commonly used case is to set a background image for the `g-guard` component, which is usually the root.

```html
<g-guard backgroundImage="url('http://www.pptbz.com/uploadimg//pptpic/201412/2014121012560474.jpg')">
</g-guard>
```

If we align our `g-container` to the right by setting `justifyContent="flex-end"` of the `g-guard` element and give `g-container` a little bit right margin, e.g.

```html
<g-guard backgroundImage="url('http://www.pptbz.com/uploadimg//pptpic/201412/2014121012560474.jpg')" 
    justifyContent="flex-end">
    <g-guard-container marginRight="64px">
        <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
        <g-app-name marginBottom="20px"></g-app-name>
        <g-account-input marginBottom="20px"></g-account-input>
        <g-password-input marginBottom="20px"></g-password-input>
        <g-login-button marginBottom="20px"></g-login-button>
    </g-guard-container>
</g-guard>
```

we will get a page like the following:

<ZoomImg src="./images/background_image.png" />
