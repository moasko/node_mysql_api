  # MoaskoDev e-commerce API

## installation
```bash
$ cd moasko-dev-api
$ npm install
```	
## usage
```bash
$ npm start
```
## Products
| Method  | url | action |
| --- | --- |---|
| GET  | ```/api/products/all```| recuperé tous les produits | 
| GET  | ```/api/product/{id}``` | recuperé un produits par le id |
| PUT| ```/api/product/update/{id}``` | ajouter un produit dan la base de donnéés |
| DELETE | ```/api/product/delete/:id``` | supprimer un produit |

## categorys

| Method  | url | action |
| --- | --- |---|
| GET  | ```/api/categorys/all``` |recuperé tous les category | 
| GET  | ```/api/category/{id}``` | recuperé un category par le id |
| PUT| ```/api/category/update/{id}```|  ajouter un category dan la base de donnéés |
| DELETE | ```/api/category/delete/:id```|  supprimer un produit |

## Vendors
| Method  | url | action |
| --- | --- |---|
| GET  | ```/api/vendor/all``` |recuperé tous les vendeur | 
| GET  | ```/api/vendor/{id}``` | recuperé un vendeur par le id |
| PUT| ```/api/vendor/update/{id}``` | ajouter un vendeur dan la base de donnéés |
| DELETE | ```/api/vendor/delete/:id```  |supprimer un vendeur 