const koa = require('koa');

const app = new koa()

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    ctx.body = 'Hello ';
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(async ctx => {
    let count = 0;
    for(let i = 0;i < 10000000;i ++) { if (i % i - 1 == 0)count += 1;}
    console.log('response', ctx.body)
    ctx.state.user = 'zjl'
    ctx.body += 'World';
});


const http = require('http');
http.createServer(app.callback()).listen(9999, () => {
    console.log('koa server is listening in port 9999');
});

const https = require('https');
http.createServer(app.callback()).listen(9998, () => {
    console.log('koa server is listening in port 9998');
});
// app.listen(9999, () => {
//     console.log('koa server is listening in port 9999');
// })