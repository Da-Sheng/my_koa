import { addAliases } from 'module-alias'
addAliases({
    '@root': __dirname,
    '@interface': `${__dirname}/interface`,
    '@config': `${__dirname}/config`,
    '@middlewares': `${__dirname}/middlewares`,
})
import Koa from 'koa';
import { createContainer, Lifetime } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-koa';
import config from '@config/index';
import render from 'koa-swig'
import { co } from 'co';

const app = new Koa();
const container = createContainer();
const { port, viewDir, memoryFlag, staticDir } = config

container.loadModules([
    `${__dirname}/services/**/*.ts`
], {
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
});

app.use(scopePerRequest(container));
app.use(loadControllers(`${__dirname}/routes/**/*.ts`));
app.context.render = co.wrap(render({
    root: viewDir,
    autoescape: true,
    cache: <'memory' | false>memoryFlag,
    writeBody: false,
    ext: 'html'
}))
app.listen(port, () => {
    console.log(`启动成功, 访问地址 http://localhost:${port}`)
});