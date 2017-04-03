# ng-autofocus-directive

This directive solves the issue of autofocus in angular 2.x, inclusive when you use a dinamically input created before the DOM generation, for example an input created using *ngIf or a hidden input.

## Install

You can get it on npm:

`npm install ng-autofocus-directive --save`

## Setup

You'll need to add `AutofocusModule` to your application module.

```typescript
import { AutofocusModule } from 'ng-autofocus-directive/autofocus/autofocus.module';

    @NgModule({
      imports: [
        AutofocusModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [],
      bootstrap: [AppComponent]

      export class AppModule {}
})
```

## Usage
Use the directive in your input:

```html
<input ngAutoFocus type="text">
```