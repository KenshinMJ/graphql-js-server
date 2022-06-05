# graphql-server

GraphQL サーバの練習用プロジェクトです。

## 使い方
以下のコマンドで起動します。

```sh
npm run start
# 以下URLでGraphQL Playground(GUI)を開きます
# http://localhost:4000/playground
```

```graphql
{
    users {
        name
        email
        posts {
            title
            published
        }
     }
}
```