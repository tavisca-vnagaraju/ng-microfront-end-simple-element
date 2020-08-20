======================================================================
Micro Front-End using Angular
======================================================================

1. Create two or more Angular Apps with following mandatory packages
   1. @angular/elements  for createCustomElement
   2. @webcomponents/custom-elements
   3. @webcomponents/webcomponentsjs
   4. document-register-element
 
 Create an Angular element by using CUSTOM_ELEMENTS_SCHEMA ,Injector from from '@angular/core'
 by adding schemas: [CUSTOM_ELEMENTS_SCHEMA],
            entryComponents: [SimpleComponent],
and injecting Injector into constructor
and 
creating custom element as below
const simpleElement = createCustomElement(SimpleComponent, {injector: this.injector});
    // defining the custom tag
    customElements.define('simple-element', simpleElement);

2. For each Angular app Run the following command
   1. ng add ngx-build-plus
      1. Angular CLI Express Build for compiling the Angular application into single distributable js file
   2. Modify the angular.json of each Angular project with its build configuration
      1. "architect": {
         "build": {
         "builder": "ngx-build-plus:build",
   3. Create Angular Elements with required logic
3. Build each angular app in single file using following command
   1. ng build --prod --output-hashing none --single-bundle true
      1. Bundle all Angular dependencies in a single file main.js
      2. ./dist/<project-folder>/main.js
4. Host each Angular app in seperate host
   1. Docker Image (recommanded)
      1. Node.js + Angular Image of Docker
   2. Node.js server
      1. lite server
      2. Express Server
      3. http-server
         1. npm install -g http-server
         2. To start the server on a port
            1. http-server -p <PORT-NO>
   3. Any other web Server
5. Add a Container Application (Angular/React/JavaScript)
   1. Use CDN to refer the following JS
      1. <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
      2.
      <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
      and add hosted main.js file in the script as well to use it as cdn and the custom element.
      example <script type="text/javascript" src="http://localhost:5000/main.js"></script>
      this cdn contains the element(micro front end element ) that we created can be used
   2. Load the output JavaScript from Angular app from their CDNs