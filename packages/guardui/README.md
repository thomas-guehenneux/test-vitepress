<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align="center">
  <a href="javascript:;"><img src="https://img.shields.io/badge/test-passing-brightgreen" /></a>
  <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
  <a href="https://docs.authing.cn/v2/reference/ui-components/" target="_blank"><img src="https://img.shields.io/badge/docs-passing-brightgreen" /></a>
  <a href="javascript:;"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
  <a href="javascript:;" target="_blank"><img src="https://img.shields.io/badge/node-%3E=12-green.svg" alt="Node"></a>
</div>

# Guard UI

A semantic UI component library based on W3C's web component standard

<br />

## Quick start

At it's core, Guard UI leverages the idea of semantic programming. So in order to implement authentication page, all your need to is simply `place` some components on the page and add some event listener to handle the result. All the heavy lifting is done inside our semantic components.

```html
<g-guard>
  <g-guard-container>
    <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
    <g-app-name marginBottom="20px"></g-app-name>
    <g-account-input marginBottom="20px" text=""></g-account-input>
    <g-password-input marginBottom="20px" text=""></g-password-input>
    <g-login-button marginBottom="20px"></g-login-button>
  </g-guard-container>
</g-guard>
```

```html
<script type="module">
  import { Guard } from 'https://unpkg.com/guard-ui/dist/index.mjs'

  const guard = await Guard.initialize({appId: "62ac18c93134e5fafcd29435"});
  guard.on('login', (code, message, userInfo) => {
    if (code === 200) {
      console.log(userInfo);
      guard.message.success('Welcome! ' + userInfo.nickname);
    } else {
      guard.message.error(message);
    }
  });
</script>
```

## 📚 Documentation

To check out live examples and docs, visit [docs](https://lancemao.github.io/guardui/)

## ❓ Questions

For questions and support please use the [official forum](https://forum.authing.cn/). The issue list of this repo is exclusively for bug reports and feature requests.


## 🤝 Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request

Thank you to all the people who already contributed to Guard UI!

<div>
  <a href="https://github.com/leinue"><img width="30px" src="https://avatars.githubusercontent.com/u/2469688?v=4" /></a>
  <a href="https://github.com/lixpng"><img width="30px" src="https://avatars.githubusercontent.com/u/19266401?v=4" /></a>
  <a href="https://github.com/kelvinji2009"><img width="30px" src="https://avatars.githubusercontent.com/u/881201?v=4" /></a>
  <a href="https://github.com/vexilligera"><img width="30px" src="https://avatars.githubusercontent.com/u/20215432?v=4" /></a>
  <a href="https://github.com/gouyaming"><img width="30px" src="https://avatars.githubusercontent.com/u/24635178?v=4" /></a>
  <a href="https://github.com/willin"><img width="30px" src="https://avatars.githubusercontent.com/u/1890238?v=4" /></a>
  <a href="https://github.com/TingYinHelen"><img width="30px" src="https://avatars.githubusercontent.com/u/14006826?v=4" /></a>
  <a href="https://github.com/Meeken1998"><img width="30px" src="https://avatars.githubusercontent.com/u/42825670?v=4" /></a>
  <a href="https://github.com/yelexin"><img width="30px" src="https://avatars.githubusercontent.com/u/27125445?v=4" /></a>
  <a href="https://github.com/HowieWolf"><img width="30px" src="https://avatars.githubusercontent.com/u/14340114?v=4" /></a>
  <a href="https://github.com/JackJin2014"><img width="30px" src="https://avatars.githubusercontent.com/u/1982447?v=4" /></a>
  <a href="https://github.com/fuergaosi233"><img width="30px" src="https://avatars.githubusercontent.com/u/22197568?v=4" /></a>
  <a href="https://github.com/clearloop"><img width="30px" src="https://avatars.githubusercontent.com/u/26088946?v=4" /></a>
  <a href="https://github.com/liaochangjiang"><img width="30px" src="https://avatars.githubusercontent.com/u/35447896?v=4" /></a>
  <a href="https://github.com/andyzhaozhao"><img width="30px" src="https://avatars.githubusercontent.com/u/7730080?s=96&v=4" /></a>
  <a href="https://github.com/authing-wangck"><img width="30px" src="https://avatars.githubusercontent.com/u/78251114?s=96&v=4" /></a>
  <a href="https://github.com/chho93"><img width="30px" src="https://avatars.githubusercontent.com/u/56515268?s=96&v=4" /></a>
  <a href="https://github.com/Donglyrun"><img width="30px" src="https://avatars.githubusercontent.com/u/17630579?s=120&v=4" /></a>
  <a href="https://github.com/gouyaming"><img width="30px" src="https://avatars.githubusercontent.com/u/24635178?s=96&v=4" /></a>
  <a href="https://github.com/lancemao"><img width="30px" src="https://avatars.githubusercontent.com/u/5020396?s=96&v=4" /></a>
  <a href="https://github.com/limejuiceOwO"><img width="30px" src="https://avatars.githubusercontent.com/u/59465535?v=4" /></a>
  <a href="https://github.com/luojielin"><img width="30px" src="https://avatars.githubusercontent.com/u/29780568?v=4" /></a>
  <a href="https://github.com/Mereithhh"><img width="30px" src="https://avatars.githubusercontent.com/u/22872368?s=96&v=4" /></a>
  <a href="https://github.com/qianfeiqianlan"><img width="30px" src="https://avatars.githubusercontent.com/u/12892568?s=96&v=4" /></a>
  <a href="https://github.com/shangsinian"><img width="30px" src="https://avatars.githubusercontent.com/u/6363555?s=96&v=4" /></a>
  <a href="https://github.com/stan071408"><img width="30px" src="https://avatars.githubusercontent.com/u/6972394?s=96&v=4" /></a>
  <a href="https://github.com/wajiao"><img width="30px" src="https://avatars.githubusercontent.com/u/20143458?s=96&v=4" /></a>
  <a href="https://github.com/wedreamer"><img width="30px" src="https://avatars.githubusercontent.com/u/43949542?s=96&v=4" /></a>
  <a href="https://github.com/Xuancaosu"><img width="30px" src="https://avatars.githubusercontent.com/u/51688262?s=96&v=4" /></a>
  <a href="https://github.com/zhaoyiming0803"><img width="30px" src="https://avatars.githubusercontent.com/u/25874685?s=96&v=4" /></a>
</div>

## 🎁 License

[MIT](https://opensource.org/licenses/MIT)

