# Topics

- We can define props use `defineProps` method and give it an object with prop name as key and value as the type of prop(string, boolean etc), we you need to give more fields like default value, required then instead of just giving the type of props give an object the other required fields:

  ```javascript
  defineProps({
    name: {
      type: String,
      default: "Ram",
      required: true,
    },
  });
  ```

* When to use .value when to not. For now I think when we need to access the refs in script tag then we have to use `.value` but in template we don't have to use `.value`. Also one time I was trying to access props defined by `defineProps` in the script tag just by key but it was not working so I created a variable with name `props` and equate it with `defaultProps` and I was able to access props using `props.propName`.

* Computed methods run when some dependency changes something like when dependency changes in the `useEffect` the callback function runs.
* Use `:` when need to pass number or boolean as props if we don't use then all the props will be consider as string.
* Defines state with `ref`.

* We use `<slot>` to have functionality of like we have `{children}` in React.

* ADD ROUTING THINGS

* HOW TO KNOW WHAT ARE THE DEPENDENCIES OF computed METHOD

# package.json

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
