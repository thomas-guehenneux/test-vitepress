require.config({ paths: { 'vs': './node_modules/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {

    // 初始化变量
    var htmlEditor;
    var jsEditor;
    var output;

    var defaultHTML = 
`<g-guard>
    <g-router>
        <g-guard-container path="/">
            <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
            <g-app-name marginBottom="20px"></g-app-name>
            <g-account-input marginBottom="20px"></g-account-input>
            <g-password-input marginBottom="20px"></g-password-input>
            <g-login-button marginBottom="20px"></g-login-button>
            <g-button type="link" to="/register" marginBottom="20px">立即注册</g-button>
        </g-guard-container>

        <g-guard-container path="/register">
            <g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>
            <g-app-name marginBottom="20px"></g-app-name>
            <g-account-input marginBottom="20px"></g-account-input>
            <g-password-input marginBottom="20px"></g-password-input>
            <g-password-confirm-input marginBottom="20px"></g-password-confirm-input>
            <g-register-button marginBottom="20px"></g-register-button>
            <g-button type="back" marginBottom="20px">返回登录</g-button>
        </g-guard-container>
    </g-router>
</g-guard>
`
    const defaultJS = 
`import { Guard } from 'https://unpkg.com/guard-ui/dist/index.mjs'

// try change app ID to 62345c87ffe7c884acbae53c
const guard = await Guard.initialize({appId: "62ac18c93134e5fafcd29435"});
guard.on('login', (code, message, userInfo) => {
    if (code === 200) {
        console.log(userInfo);
        guard.message.success('Welcome! ' + userInfo.nickname);
    } else {
        guard.message.error(message);
    }
});

// try set another accent color
// guard.setAccentColor('#c50019');
`

    // 定义编辑器主题
    monaco.editor.defineTheme('myTheme', {
        base: 'vs',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
    });
    // monaco.editor.setTheme('myTheme');

    var htmlModel = monaco.editor.createModel(defaultHTML, 'html');
    htmlEditor = monaco.editor.create(document.getElementById('htmlEditor'), {
        model: htmlModel,
        minimap: { enabled: false },
    });

    monaco.languages.registerCompletionItemProvider('html', {
        provideCompletionItems: () => {
            var suggestions = [
                {
                    label: 'backgroundColor',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'backgroundColor="$0"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'alignItems',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'alignItems="${1:center}"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'justifyContent',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'justifyContent="${1:center}"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'marginLeft',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'marginLeft="$0px"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'marginRight',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'marginRight="$0px"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'marginBottom',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'marginBottom="$0px"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'marginTop',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: 'marginTop="$0px"',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'vlayout',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-v-layout>$0</g-v-layout>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'hlayout',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-h-layout>$0</g-h-layout>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'guard',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-guard>$0</g-guard>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'guard-container',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-guard-container>$0</g-guard-container>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'app-logo',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-app-logo marginTop="24px" marginBottom="24px"></g-app-logo>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'app-name',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-app-name marginBottom="20px"></g-app-name>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'account-input',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-account-input marginBottom="20px"></g-account-input>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'password-input',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-password-input marginBottom="20px"></g-password-input>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'password-confirm-input',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-password-confirm-input marginBottom="20px"></g-password-confirm-input>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'error-text',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-error-text marginTop="-15px" marginBottom="5px"></g-error-text>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'login-button',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-login-button marginBottom="20px"></g-login-button>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                },
                {
                    label: 'register-button',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: '<g-register-button marginBottom="20px"></g-register-button>',
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
                }
            ];
            return { suggestions: suggestions };
        }
    });

    var jsModel = monaco.editor.createModel(defaultJS, 'javascript');
    jsEditor = monaco.editor.create(document.getElementById('jsEditor'), {
        model: jsModel,
        minimap: { enabled: false },
    });

    // var outputModel = monaco.editor.createModel('', 'json');
    // const modelUri = monaco.Uri.parse("json://grid/settings.json");
    // const jsonModel = monaco.editor.createModel(JSON.stringify('', null, '\t'), "json", modelUri);
    // output = monaco.editor.create(document.getElementById('outputEditor'), {
    //     model: outputModel,
    //     minimap: { enabled: false },
    // });
    // window.output = output

    const guardContainer = document.querySelector('#guard');
    guardContainer.insertAdjacentHTML('afterbegin', htmlEditor.getValue());

    htmlEditor.getModel().onDidChangeContent(() => {
        while (guardContainer.firstChild) {
            guardContainer.removeChild(guardContainer.lastChild);
        }
        guardContainer.insertAdjacentHTML('afterbegin', htmlEditor.getValue());
    });

    var setInnerHTML = function (elm, html) {
        elm.innerHTML = html;
        Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
            const newScript = document.createElement("script");
            Array.from(oldScript.attributes)
                .forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }

    var jsContainer = document.getElementById('djs')
    const replaceLog = `
        var originalLog = console.log;
        console.log = function(msg) {
            output.trigger('keyboard', 'type', {text: msg});
            output.trigger('anyString', 'editor.action.formatDocument')

            originalLog(msg)
        }
    `
    setInnerHTML(jsContainer, `<script type="module">
        ${jsEditor.getValue()}
        </script>
    `);
    jsEditor.getModel().onDidChangeContent(() => {
        const code = jsEditor.getValue();
        setInnerHTML(jsContainer, `<script type="module">
            Guard.getInstance().setAccentColor('#396AFF');
            ${code}
            </script>
        `);
    });
 
});