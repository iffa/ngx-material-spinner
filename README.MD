![Angular version required](https://img.shields.io/badge/@angular/core-^10.0.0-blue.svg?style=flat-square)
![Angular Material version required](https://img.shields.io/badge/@angular/material-^10.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Dependency Status](https://img.shields.io/david/iffa/ngx-material-spinner.svg?style=flat-square)
![Code coverage](https://img.shields.io/codecov/c/gh/iffa/ngx-material-spinner?style=flat-square)

Lightweight spinner module for Angular, built using Angular Material.

## Installation

Using npm:

```bash
$ npm install ngx-material-spinner --save
```

Using yarn:

```bash
$ yarn add ngx-material-spinner
```

Using Angular CLI:

```bash
$ ng add ngx-material-spinner
```

## Usage

Import `NgxMaterialSpinnerModule` in the root module of the application:

```typescript
import { NgModule } from '@angular/core';
import { NgxMaterialSpinnerModule } from "ngx-material-spinner";

@NgModule({
  imports: [
    // ...
    NgxMaterialSpinnerModule
  ]
})
export class AppModule {}
```

Add `ngx-material-spinner` to component template:

```html
<ngx-material-spinner></ngx-material-spinner>
```

Inject `NgxMaterialSpinnerService` and access spinner functionality:

```typescript
import { NgxMaterialSpinnerModule } from "ngx-material-spinner";

export class AppComponent implements OnInit {
  constructor(private spinner: NgxMaterialSpinnerModule) {}

  ngOnInit() {
    this.spinner.show('primary');

    // hide spinner after 5000ms
    this.spinner.hide('primary', 5000);
  }
}
```

## Available options

- **[backgroundColor]**: Set overlay background color in rgba, default `rgba(51, 51, 51, 0.8)`
- **[color]**: Angular Material color choices, primary/secondary/accent, default `primary`
- **[strokeWidth]**: Progress spinner stroke width, default `8`
- **[diameter]**: Diameter (size) of the progress spinner, default `96`
- **[fullScreen]**: Enable or disable fullscreen mode, default `true`
- **[name]**: Spinner instance name, default `primary`
- **[zIndex]**: Z-index of the spinner overlay, default `99999`

## Credits

- Original creator [Napster2210](https://github.com/Napster2210/ngx-spinner)

## License

ngx-material-spinner is licensed under the [MIT license](./LICENSE).
