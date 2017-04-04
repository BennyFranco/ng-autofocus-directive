# ng-autofocus-directive

This directive solves the issue of autofocus in angular 2.x, inclusive when you use a dinamically input created before the DOM generation, for example an input created using *ngIf or a hidden input.

[![Build Status][travis-badge]][travis-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]
[![npm][npm-badge]][npm-badge-url]

## Install

You can get it on npm:

`npm install ng-autofocus-directive --save`

## Setup

You'll need to add `AutofocusModule` to your application module.

```typescript
import { AutofocusModule } from 'ng-autofocus-directive';

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

[travis-badge]: https://travis-ci.org/BennyFranco/ng-autofocus-directive.svg?branch=master
[travis-badge-url]: https://travis-ci.org/BennyFranco/ng-autofocus-directive
[david-badge]: https://david-dm.org/BennyFranco/ng-autofocus-directive.svg
[david-badge-url]: https://david-dm.org/BennyFranco/ng-autofocus-directive
[david-dev-badge]: https://david-dm.org/BennyFranco/ng-autofocus-directive/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/BennyFranco/ng-autofocus-directive?type=dev
[npm-badge]: https://img.shields.io/npm/v/ng-autofocus-directive.svg
[npm-badge-url]: https://www.npmjs.com/package/ng-autofocus-directive