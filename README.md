# React Boilerplate

This is my personal React boilerplate with everything that **_I_** need.

## Understanding the project

-   [Structure](https://vimeo.com/168648012)

## 📦 Project defaults

```
.
├─ /_tools
├─ /src
│  ├─ /components
│  ├─ /containers
│  ├─ /styles
│  ├─ index.html
│  └─ index.jsx
├─ .babelrc.js
├─ .eslintrc.js
└─ webpack.config.js
```

## Hints

-   To understand why a component re-rendered use `static whyDidYouRender = true`. See more options [here](https://github.com/welldone-software/why-did-you-render#options)

### IE 11 support

-   Put `ie 11` in `overrideBrowserslist` property inside of `webpack.base.js` file.
-   Put `import 'react-app-polyfill/ie11';` in the `index.jsx`. More info [here](https://www.npmjs.com/package/react-app-polyfill#supporting-internet-explorer)
-   To use `whyDidYouRender` you need to replace the require call on `index.jsx`. See more [here](https://github.com/welldone-software/why-did-you-render#installation)

## TODO

-   Testing & Coverage (istanbul)
-   ImmutableJS
-   emotion, emotion-react, emotion-babel-plugin
-   Use [stitches](https://stitches.dev/) instead of styled-components?
-   Redux folder structure
-   Typescript
-   Router

Not much time to configure, but I will get there.
