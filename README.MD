![Angular version required](https://img.shields.io/badge/@angular/core-^10.0.0-blue.svg?style=flat-square)
![Angular Material version required](https://img.shields.io/badge/@angular/material-^10.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Dependency Status](https://img.shields.io/david/iffa/ngx-material-spinner.svg?style=flat-square)
![Code coverage](https://img.shields.io/codecov/c/gh/iffa/ngx-material-spinner?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-material-spinner?style=flat-square)
![npm](https://img.shields.io/npm/v/ngx-material-spinner?style=flat-square)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

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
<ngx-material-spinner><p>You can include custom content (i.e. loading text)</p></ngx-material-spinner>
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

## Options

Now, you can pass below config options to change inspector behavior in the `.forRoot()` method. All the options are optional.:

| Option                | Type              | Description                                                                                                                                               |
| --------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backgroundColor       | `string`          | Change overlay background color<br>*Default value: `rgba(51, 51, 51, 0.8)`*                                                                               |
| color                 | `ThemePalette`    | Set the spinner color, available options are Angular Material provided `primary`/`accent`/`warn`.<br>*Default value: `primary`*                           |
| fullScreen            | `boolean`         | If set to true, uses full screen CSS styling.<br>*Default value: `true`*                                                                                  |
| name                  | `string`          | Change the name of this spinner instance. Allows having multiple separate spinners in the application.<br>*Default value: `primary`*                      |
| zIndex                | `number`          | Sets the overlay's z-index value. Change this if the overlay doesn't behave like an overlay (elements over it).<br>*Default value: `99999`*               |
| strokeWidth           | `number`          | Set the stroke width of the progress spinner.<br>*Default value: `8`*                                                                                     |
| diameter              | `number`          | Set the diameter of the progress spinner.<br>*Default value: `96`*                                                                                        |
| animated              | `boolean`         | Enables or disables overlay fade animations.<br>*Default value: `true`*                                                                                   |

## Credits

- Adapted and heavily modified from `ngx-spinner`, created by [Napster2210](https://github.com/Napster2210/)

## License

ngx-material-spinner is licensed under the [MIT license](./LICENSE).
