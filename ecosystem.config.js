// pm2.config.js
module.exports = {
  apps: [
    {
      name: 'my_koa',
      script: './app.ts',
      instances: "max",
      exec_mode: 'cluster',
      interpreter: './node_modules/.bin/ts-node-dev', // 使用本地 ts-node
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: 'development',
        TS_NODE_PROJECT: './tsconfig.json',
        TS_NODE_TRANSPILE_ONLY: 'true'
      },
      env_production: {
        NODE_ENV: 'production',
        TS_NODE_PROJECT: './tsconfig.json',
        TS_NODE_TRANSPILE_ONLY: 'true'
      },
      error_file: './logs/my_koa-error.log',
      out_file: './logs/my_koa-out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}; 