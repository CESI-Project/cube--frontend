# Contributing

We'd love you to contribute to our source code.

## Found a Bug or request a feature/change ?

You're welcome to summit a Issue, use the according template.

## Branching conventions

You must create a branch with the name of the Issue.

* `feat/<subject>`
* `fix/<subject>`
* `docs/<subject>`
* `style/<subject>`
* `delete/<subject>`
* `test/<subject>`

For example :

> feat/preview_document

## Commit Message Conventions

These rules are adopted
from [the AngularJS commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/)
.

### Format of the commit message

```
<type>(<scope>): <subject>

<optional body>

<optional footer>
```

No line of the commit message cannot be longer 100 characters!

This allows the message to be easier to read on github as well as in various git tools.

No one capital letters and always in English!

### Allowed `<type>`

* `feat`
* `fix`
* `docs`
* `style`
* `refactor`
* `test`
* `confs`
* `chore`

### Allowed `<scope>`

Scope could be anything specifying place of the commit change or issues

For example :

> `feat(preview_document):`
> `docs(readme):`
> `fix(#234):`

### Subject line

Subject line contains a brief description of the change.

For example :

> fix(notification): fix a visual issue between chrome and firefox

