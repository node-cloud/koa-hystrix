# koa-consul

This middleware will set a /hystrix.stream route as default. You can use hystrix-dashboard to get the circuit's status.

## Usage

``` javascript
import Koa from 'koa';
import KoaHystrix from 'koa-hystrix';

let app = new Koa();

app.use(KoaHystrix());
```

## API

### KoaConsul(options)

* options.url 
* options.globalStats this option is come from [brakes](https://github.com/node-cloud/brakes).

``` javascript
import Brakes from 'brakes';
const globalStats = Brakes.getGlobalStats();
```