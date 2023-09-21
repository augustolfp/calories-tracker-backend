<br />

<h1 align='center'>DIETINHA: Back end</h1>

<div align="center">
    <img src="https://raw.githubusercontent.com/augustolfp/calories-tracker-frontend-v2/751adfb5443da0b74fc959966077ccf4a175ac35/src/assets/icons/icon.svg" alt="Logo" width="50%">
    <br />
    <br />
    <a href="https://github.com/augustolfp/calories-tracker-frontend-v2"><strong>Repositório do Front end</strong></a>
    <br />
    <a href="https://github.com/augustolfp/Taco-table-simplifier"><strong>Repositório da adaptação da tabela TACO</strong></a>
</div>

<br />

# Descrição

API desenvolvida para registrar e contabilizar o consumo diário de macronutrientes, que utiliza dados nutricionais da tabela TACO - UNICAMP.

<br />

# Como utilizar

## Clonar o Repositório

Execute:

```bash
git clone https://github.com/augustolfp/calories-tracker-backend.git
```

<br />

## Variáveis de Ambiente

Crie um documento **.env** na pasta raiz do projeto. Utilize o **.env.example** como base:

```
DATABASE_URL = postgresql://postgres:postgres@mydatabase:5432/calories_tracker

JWT_SECRET = YOUR_PASSWORD_HERE

POSTGRES_USERNAME=postgres

POSTGRES_PASSWORD=postgres

POSTGRES_DB=calories_tracker

PORT = 5000
```

<br />

## Docker

Execute o comando na raiz do projeto para montar as imagens do Docker:

```bash
docker compose up --build
```

<br />

**`A API já deve estar funcionando!`**

<br />

# Referência da API

## Sign-Up

```http
POST /sign-up
```

| Body       | Tipo     | Descrição                          |
| :--------- | :------- | :--------------------------------- |
| `name`     | `string` | **Obrigatório**. Nome do usuário.  |
| `email`    | `string` | **Obrigatório**. Email do usuário. |
| `password` | `string` | **Obrigatório**. Senha do usuário. |

<br />

## Sign-In

```http
POST /sign-in
```

| Body       | Tipo     | Descrição                          |
| :--------- | :------- | :--------------------------------- |
| `email`    | `string` | **Obrigatório**. Email do usuário. |
| `password` | `string` | **Obrigatório**. Senha do usuário. |

<br />

## Registrar novo dia

(_Rota autenticada_)

```http
POST /add-counted-day
```

<br />

| Body             | Tipo     | Descrição                                          |
| :--------------- | :------- | :------------------------------------------------- |
| `day`            | `string` | **Obrigatório**. Data no formato **`AAAA-MM-DD`**. |
| `notes`          | `string` | **Opcional**. Comentário sobre o dia.              |
| `caloriesTarget` | `number` | **Obrigatório**. Alvo de calorias do usuário.      |
| `proteinsTarget` | `number` | **Obrigatório**. Alvo de proteinas do usuário.     |

<br />

## Adicionar Refeição em um dia

(_Rota autenticada_)

```http
POST /add-meal
```

| Body           | Tipo     | Descrição                               |
| :------------- | :------- | :-------------------------------------- |
| `name`         | `string` | **Obrigatório**. Título da refeição.    |
| `description`  | `string` | **Opcional**. Descrição da refeição.    |
| `countedDayId` | `number` | **Obrigatório**. Id do dia da refeição. |

<br />

## Adicionar Ingredientes em uma Refeição

(_Rota autenticada_)

```http
POST /add-ingredients
```

| Body       | Tipo     | Descrição                                                       |
| :--------- | :------- | :-------------------------------------------------------------- |
| `name`     | `string` | **Obrigatório**. Nome do ingrediente.                           |
| `mealId`   | `number` | **Obrigatório**. Id da refeição da qual o igrediente faz parte. |
| `weight`   | `number` | **Obrigatório**. Peso em _gramas_ do ingrediente.               |
| `carbs`    | `number` | **Obrigatório**. Carboidratos em _gramas_.                      |
| `fats`     | `number` | **Obrigatório**. Gorduras em _gramas_.                          |
| `proteins` | `number` | **Obrigatório**. Proteinas em _gramas_.                         |
| `kcals`    | `number` | **Obrigatório**. Valor calórico do ingrediente.                 |

<br />

## Receber dados do usuário

(_Rota autenticada_)

```http
GET /get-days-data
```

<br />

## Remover um ingrediente

(_Rota autenticada_)

```http
DELETE /delete-ingredient/<INGREDIENT_ID>
```

<br />

## Remover uma refeição

(_Rota autenticada_)

```http
DELETE /delete-meal/<MEAL_ID>
```

<br />

## Remover um dia

(_Rota autenticada_)

```http
DELETE /delete-counted-day/<COUNTED_DAY_ID>
```

<br />

## Rota para validação de Token

(_Rota autenticada_)

```http
GET /validate
```

<br />

## HEADER para Rotas Autenticadas

Rotas autenticadas requerem um **HEADER** no seguinte formato:

| Headers         | Tipo     | Descrição                                          |
| :-------------- | :------- | :------------------------------------------------- |
| `Authorization` | `string` | **Obrigatório**. Formato **`Bearer <JWT_TOKEN>`**. |

**`PS: JWT TOKEN é recebido na resposta do Sign-in!`**

<br />

### Exemplo:

```
headers: {
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF1Z3VzdG9sZnBAZ21haWwuY29tIiwibmFtZSI6IkFnb3N0aW5obyBDYXJyYXJhIiwidXNlcklkIjoxLCJpYXQiOjE2Njc4NDI4NzMsImV4cCI6MTY2Nzg0NjQ3M30.OHv7pVIyIthAhkGtVrUle2yXrHk7IFAXjZtfNXDO2yc,
        },
```

<br />

# Ferramentas utilizadas

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>

<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/> <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/> <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>

<img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/> <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" height="30px"/>

<img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" height="30px"/> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" height="30px"/>

<img src='https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white' />

<br />
