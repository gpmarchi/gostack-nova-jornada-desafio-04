<h3 align="center">
  Desafio 04: Primeiro projeto Node.js
</h3>

## :rocket: Sobre o desafio

Nesse desafio foi necessário criar uma aplicação para armazenar transações financeiras de entrada e saída, que permite o cadastro e a listagem dessas transações.

## Instalação

Para instalar o projeto localmente na sua máquina basta clonar o repositório:

```bash
git clone https://github.com/gpmarchi/gostack-nova-jornada-desafio-04.git && cd gostack-nova-jornada-desafio-04
```

E rodar o comando abaixo para instalar as dependências necessárias:

```bash
yarn
```

## Rotas da aplicação

Abaixo estão as rotas da aplicação e o que cada uma faz:

- **`POST /transactions`**: A rota recebe `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Ao cadastrar uma nova transação, ela é armazenada dentro de um objeto com o seguinte formato:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: Essa rota retorna uma listagem com todas as transações que foram cadastradas até o momento, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota retorna um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

## Especificação dos testes

O desafio foi resolvido seguindo a técnica de TDD. Os testes podem ser encontrados na pasta ```src/__tests__``` e para executá-los rodar o comando:

```bash
yarn test
```

Para cada teste existe uma breve descrição do que a aplicação executa para que o mesmo passe.

- **`should be able to create a new transaction`**: Para que esse teste passe, a aplicação cria uma transação e retorna um json com a transação criada.

- **`should be able to list the transactions`**: Para que esse teste passe, a aplicação retorna um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, a aplicação não permite que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`
