module.exports = {
    apps : [{
      name: 'NodeUrlShortener',
      script: 'app.js',
  
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: '--url "https://links.tsauvajon.eu"',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  
    deploy : {
      production : {
        user : 'node',
        host : '212.83.163.1',
        ref  : 'origin/master',
        repo : 'git@github.com:tsauvajon/node-url-shortener.git',
        path : '/var/www/production',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
      }
    }
  };
