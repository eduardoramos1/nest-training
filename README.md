##
Nest training
##

> Necessário postgres estar rodando.



Gerar migration

```
npm run migration:generate --name={{migration_name}}
```

Rodar Migration
```
npm run migration:run
```

Reverter migration

```
npm run migration:revert
```



Rodando no modo docker 


```
    chmod +x .docker/entrypoint.sh
```

```
    docker-compose up
```

para executar migrations no container

```
    docker-compose exec app bash
```

