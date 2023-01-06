######
na versao 0.3 do typeorm. Alteraram a forma que que cria migração, agora precisa passar o datasource como paramentro. No caso desse projeto
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

