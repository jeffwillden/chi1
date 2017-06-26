const port = process.env.OPENSHIFT_NODEJS_PORT || 8000;
const ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const environment = process.env.CHIASMUS_ENVIRONMENT || 'development';
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async function (ctx, next) {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(ctx => {
	ctx.body = 'Hello World';
});

app.listen(port, ipAddress, () => {
	console.log('Listening on http://%s:%s', ipAddress, port);
});
