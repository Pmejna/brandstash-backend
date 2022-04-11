const Permission = require('./src/permission/models/permission.entity');

module.exports = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 31101,
    username: 'root',
    password: 'dev',
    database: 'client_management_api',
    autoLoadEntities: true,
    synchronize: true,
    entities: ["src/permission/models/*.entity.ts"],
    seeds: ['src/seeds/**/*{.ts,.js}'],
    factories: ['src/factories/**/*{.ts,.js}'],
  }