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



