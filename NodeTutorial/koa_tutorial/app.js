const Koa = require('koa');
const Router = require('@koa/router');
const static = require('koa-static');
const path = require('path');
const mount = require('koa-mount');
const fs = require('fs');
const util = require('util');
const compose = require('koa-compose');

const app = new Koa();
const router = new Router();
/** 静态资源托管 */
// app.use(static('./public'));
// 用相对路径不好，应该用动态的绝对路径更保险
// app.use(static(path.join(__dirname, './public')));
// 提供虚拟路径: /public
// app.use(mount('/public', static(path.join(__dirname, './public'))));

/** 使用异步中间件 */
// app.use(async (ctx, next) => {
// 	const data = await util.promisify(fs.readFile)('./views/index.html');
// 	ctx.type = 'html';
// 	ctx.body = data;
// 	next();
// });

/** 捕获异常的中间件应该写在最外层！ */
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.status = 500;
		ctx.body = 'Unexpected Error!';
	}
});

/** 合并中间件 */
app.use(
	compose([
		mount('/public', static(path.join(__dirname, './public'))),
		async (ctx, next) => {
			const data = await util.promisify(fs.readFile)('./views/index.html');
			ctx.type = 'html';
			ctx.body = data;
			// 异常出现在next()后的中间件，为了顶层的中间件捕获到异常，如果当前中间件是异步的，切记next()要加上await!!!
			await next();
		},
		(ctx) => {
			JSON.parse('Saito Asuka'); //抛出异常
			ctx.body = 'Asuaka Saiko!!!';
		},
	])
);

/** 最简单的服务器 simplest server
// Koa没有路由，只有中间件
// ctx -> context (including req & res)
app.use((ctx) => {
	// ctx.body = 'Hello koa';
	// ctx.req.method & ctx.req.url
	ctx.res.end('Hello koa');
});
*/

/** 配置路由configure router */
// app.use((ctx) => {
// 	const path = ctx.path;
// 	if (path === '/') {
// 		ctx.body = 'home page';
// 	} else {
// 		ctx.body = '404 not found';
// 	}
// });
router.get('/', (ctx, next) => {
	ctx.body = 'home page';
});

router.get('/user/:id', (ctx, next) => {
	const id = ctx.params.id;
	ctx.body = `user ${id}`;
});

/** 重定向同步请求 */
router.get('/usr', (ctx) => {
	ctx.redirect('/user/1');
});

router.post('/foo', (ctx) => {
	ctx = 'post /foo';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
