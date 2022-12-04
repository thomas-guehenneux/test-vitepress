# Register

## Step 1: Init

```html
<script type="module">
    import { Guard } from 'https://unpkg.com/guard-ui/dist/index.mjs'
    const guard = await Guard.initialize({appId: "your authing app id"});
</script>
```

## Step 2: Add components

```html{7-8}
<g-guard>
    <g-guard-container>
        <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
        <g-app-name marginBottom="20px"></g-app-name>
        <g-account-input marginBottom="20px"></g-account-input>
        <g-password-input marginBottom="20px"></g-password-input>
        <g-password-confirm-input marginBottom="20px"></g-password-confirm-input>
        <g-register-button marginBottom="20px"></g-register-button>
    </g-guard-container>
</g-guard>
```

Compare to the Login page which is explained in [Getting Started](./getting-started.md), the only difference is line 7 & 8 as highlighted in the code block.

## Step 3: Handle result

```javascript
guard.on('register', (code, message, userInfo)=>{});
```