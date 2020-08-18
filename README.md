# Angular elements - custom elements
https://blog.bitsrc.io/using-angular-elements-why-and-how-part-1-35f7fd4f0457   
https://www.youtube.com/watch?v=Z1gLFPLVJjY&t=4s   
https://www.techiediaries.com/angular/angular-9-web-components-custom-elements-shadow-dom   
https://www.techiediaries.com/angular/angular-9-elements-web-components   

[hello-angular-element](./src/app/hello-angular-element) contains example of angular element.

* it can be used as normal angular component like [here](./src/app/app.component.html#L2)
* it can be used as custom element in the same angular app like [here](./src/app/app.component.ts#L12)
* it can be used in another application - **not an angular application** like [here](./preview/index.html). To generate ```angularapp.js``` make sure that ```main.ts``` points to ```HelloAngularElementModule``` like this
  ```
  platformBrowserDynamic().bootstrapModule(HelloAngularElementModule)
  .catch(err => console.error(err));
  ```
  and next run ```npm run build:component```.

  >Shadow DOM: CSS defined inside shadow DOM is scoped to it. Style rules don't leak out and page styles don't bleed in. More [here](https://developers.google.com/web/fundamentals/web-components/shadowdom).

  >Shadow DOM: selectors and styles inside of a shadow DOM node don’t leak outside of the shadow root and styles from outside the shadow root don’t leak in. There are a few exceptions that inherit from the parent document, like font family and document font sizes (e.g. rem) that can be overridden internally. More [here](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/#what-is-the-shadow-dom).

CSS selectors in Light DOM (normal DOM) are prevented from reaching elements inside shadow DOM but there are exceptions when it can happen.
But when a CSS property has the value inherit, **the shadow DOM will still inherit those from the light DOM**. You can **prevent** the values of properties form being inherited by using the initial value.
It can be set for all elements:
```css
* {
  all:initial;
}
```
or selected properties:
```css
* {
  color: initial;
}
```

https://stackoverflow.com/questions/49709676/light-dom-style-leaking-into-shadow-dom   
https://stackoverflow.com/questions/47189985/shadow-dom-inheriting-parent-page-css-chrome   


# GraphQL (apollo graphql)

## Project initialization

### Add [apollo client](https://www.apollographql.com/docs/angular/basics/setup/)   
  ```
  ng add apollo-angular@1.9.1
  ```
  It will install the following packages:
  ```
  "apollo-angular": "^1.9.1",
  "apollo-angular-link-http": "^1.10.0",
  "apollo-link": "^1.2.11",
  "apollo-client": "^2.6.0",
  "apollo-cache-inmemory": "^1.6.0",
  "graphql-tag": "^2.10.0",
  "graphql": "^14.6.0"
  ```
  >NOTE: I used version **1.9.1** because the newest available version (2.0.3) had some issues with copying graphql schema.

### Add [graphql-cli](https://github.com/Urigo/graphql-cli)
  ```
  npm install graphql-cli@3.0.14 -D
  ```
### Generate [.graphqlconfig](./.graphqlconfig) file
  ```
  PS D:\GitHub\kicaj29\angular9-examples> npx graphql init
  ? Enter project name (Enter to skip):
  ? Local schema file path: schema.graphql
  ? Endpoint URL (Enter to skip): https://graphqlzero.almansi.me/api
  ? Name of this endpoint, for e.g. default, dev, prod: default
  ? Subscription URL (Enter to skip):
  ? Do you want to add other endpoints? No
  ? What format do you want to save your config in? JSON

  About to write to D:\GitHub\kicaj29\angular9-examples\.graphqlconfig:

  {
    "schemaPath": "schema.graphql",
    "extensions": {
      "endpoints": {
        "default": "https://graphqlzero.almansi.me/api"
      }
    }
  }

  ? Is this ok? Yes
  PS D:\GitHub\kicaj29\angular9-examples>
  ```
### Command for copying graphql schema locally
  ```
  "gql:update-schema": "graphql get-schema -e default"
  ```
  It will create new file with the schema [schema.graphql](schema.graphql).
  There are 2 reasons why it makes sense copy schema locally:   
  * CI pipeline does not depend on external server resource to auto generate the schema
  * if the schema changes during code review we can easily see the changes
### Add [GraphQL Codegen](https://graphql-code-generator.com)   
  Plugin [Type Script Apollo Angular](https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular) allows generate code for apollo services which next can be used in DI mechanism.
  ```
  npm install @graphql-codegen/cli@1.13.1 -D
  ```
### Initialize graphql-codegen
  ```
  PS D:\GitHub\kicaj29\angular9-examples> npx graphql-codegen init

    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.

  ? What type of application are you building? Application built with Angular
  ? Where is your schema?: (path or url) schema.graphql
  ? Where are your operations and fragments?: src/**/*.graphql
  ? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Operations (operations and fragments), TypeScript Apollo Angular (typed GQL services)
  ? Where to write the output: src/generated/types.graphql-gen.ts
  ? Do you want to generate an introspection file? No
  ? How to name the config file? codegen.yml
  ? What script in package.json should run the codegen? gql:codegen

    Config file generated at codegen.yml

      $ npm install

    To install the plugins.

      $ npm run gql:codegen

    To run GraphQL Code Generator.
  ```
  It will create a new command ```gql:codegen``` in ```package.json``` and will add new devDependencies
  ```
  "@graphql-codegen/typescript": "1.13.1",
  "@graphql-codegen/typescript-operations": "1.13.1",
  "@graphql-codegen/typescript-apollo-angular": "1.13.1"
  ```
  Next ```npm install``` has to be run to install these 3 new packages.
### Install [npm-run-all](https://github.com/mysticatea/npm-run-all)
```
npm install npm-run-all -D
```
Version 4.1.5 has been installed.
