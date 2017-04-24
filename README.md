# koa-consul

This middleware depends on [brakes](https://github.com/node-cloud/brakes), it will set a /hystrix.stream route as default. You can use hystrix-dashboard to get the circuit's status.

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