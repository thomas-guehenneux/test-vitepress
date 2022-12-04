# Guard Router

>Requires Guard UI version >=1.0.3

Since Guard doesn't use any framework, we have implemented a simplified routing mechanism. 

Suppose we have two pages, one for login and one for register. Let's see how we switch between these two pages by using Guard router. We will start with two empty pages to focus on routing and will give the complete code at the end of this article.

## Step 1: Wrap components

```html
<g-router>
    <g-guard-container path="/"></g-guard-container>
    <g-guard-container path="/register"></g-guard-container>
</g-router>
```

We wrap two `g-guard-container` inside `g-router`. Then we set `path` attribute for the first container to `"/"` and `"/register"` for the second container.

::: tip
"/" means the root and it is the default value for `path` attribute
:::

## Step 2: Add a link button

```html{3}
<g-router>
    <g-guard-container path="/">
        <g-button type="link" to="/register">Register</g-button>
    </g-guard-container>

    <g-guard-container path="/register">
    </g-guard-container>
</g-router>
```

Inside the first `g-guard-container`, we add one button with `type="link"`. When user clicks on it, it will look for `to` attribute and route to that path.

::: tip
Browser's `back` and `forward` button should work as expected
:::

## Step 3: Add a back button

```html{7}
<g-router>
    <g-guard-container path="/">
        <g-button type="link" to="/register">Register</g-button>
    </g-guard-container>

    <g-guard-container path="/register">
        <g-button type="back">Back</g-button>
    </g-guard-container>
</g-router>
```

A button with `type="back"` is a shortcut to navigate back to the previous page.

::: tip
This step is optional if you are OK with user pressing browser's `back` button
:::

Now we add all the components in both pages

```html
<g-guard>
    <g-router>
        <g-guard-container path="/">
            <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
            <g-app-name marginBottom="20px"></g-app-name>
            <g-account-input marginBottom="20px"></g-account-input>
            <g-password-input marginBottom="20px"></g-password-input>
            <g-login-button marginBottom="20px"></g-login-button>
            <g-button type="link" to="/register" marginBottom="20px">Register Now</g-button>
        </g-guard-container>

        <g-guard-container path="/register">
            <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
            <g-app-name marginBottom="20px"></g-app-name>
            <g-account-input marginBottom="20px"></g-account-input>
            <g-password-input marginBottom="20px"></g-password-input>
            <g-password-confirm-input marginBottom="20px"></g-password-confirm-input>
            <g-register-button marginBottom="20px"></g-register-button>
            <g-button type="back" marginBottom="20px">Back to Login</g-button>
        </g-guard-container>
    </g-router>
</g-guard>
```

🎉 Congratulations! you have built a working authentication app with navigable login and register pages.

Try it out at [Guard UI Playground](http://wecloudapp.com/guard-ui-playground/)

::: warning
Currently Guard router only implements basic nagivation. It doesn't support any advanced routing feature compare to React Router or Vue Router.
:::