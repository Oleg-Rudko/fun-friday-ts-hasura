module.exports = {
  schema: [
    {
      "https://fun-friday-ts-hasura.hasura.app/v1/graphql": {
        headers: {
          "x-hasura-admin-secret":
            "bYbGp932HpLDL8QV54ysRrusW54d6Ek6onqBMdn9oHB6nnyJRjGQBOW7C9SNcXWg",
        },
      },
    },
  ],
  documents: ["./src/**/*.tsx", "./src/**/*.ts"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
