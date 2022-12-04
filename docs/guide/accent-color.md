# Accent Color

You can change your brand color by calling:

```js
const guard = await Guard.initialize({appId: "62345c87ffe7c884acbae53c"});
guard.setAccentColor('#c50019');
```

Component that has a tint color will change accordingly. For example a `g-button` with `type='primary'` or an input's border color when focused.

With code above, we will get a page like the following:

<ZoomImg src="./images/accent_color.png" />
