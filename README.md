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
button {
  background-color: initial;
}
```

https://stackoverflow.com/questions/49709676/light-dom-style-leaking-into-shadow-dom   
https://stackoverflow.com/questions/47189985/shadow-dom-inheriting-parent-page-css-chrome   


