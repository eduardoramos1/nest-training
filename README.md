##
Nest training
##

> Necessário postgres estar rodando.



Gerar migration

```
typeorm migration:generate src/migrations/{{migration_name}} -d dist/typeorm.config

ou

npm run migration:generate --name={{migration_name}}
```

Rodar Migration
```
 typeorm migration:run -d dist/typeorm.config.js
```

Reverter migration

```
 typeorm migration:revert -d dist/typeorm.config.js
```

