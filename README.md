######
Nest training
######

> Necessário postgres estar rodando.



Gerar migration

```
typeorm migration:generate src/migrations/courseRefactoring -d dist/typeorm.config
```

Rodar Migration
```
 typeorm migration:run -d dist/typeorm.config.js
```

Reverter migration

```
 typeorm migration:revert -d dist/typeorm.config.js
```

