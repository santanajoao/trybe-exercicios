## Endpoints

### **GET** /chocolates

- Objetivo: Retornar uma lista com todos os chocolates cadastrados.
- Código HTTP: 200 - OK;
- Body (exemplo):

```
  [
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

### **GET** /chocolates/:id

- Objetivo: Buscar um chocolate específico pelo ID.

- Caso o ID seja válido:
  - Código HTTP: 200 - OK;
  - Body (exemplo):

```
  [
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

- Caso o id seja inválido
  - Código HTTP: 404 - NOT FOUND;
  - Body (exemplo):

```
  {
    "message": "Chocolate not found"
  }
```

### **GET** /chocolates/brand/:brandId

- Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
- Código HTTP: 200 - 0K
- Body (exemplos):

```
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```
