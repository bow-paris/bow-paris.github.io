# Best of Web Paris website

# Contributing

The development branch is `src`.

The production branch is `master`. It should not be updated manually.

Start the project

```sh
npm install
npm run develop
```

The application will be running on [http://localhost:8000](http://localhost:8000).

You can access GraphiQL on [http://localhost:8000/___graphql](http://localhost:8000/___graphql).


# Test the build in local

Run the following:

```sh
npm run build
```

Then you can test by serving the `public` folder, e.g.:

```sh
cd public && python -m SimpleHTTPServer
```

# Deploy

Run the following command to build and push the build on distant `master` branch.

**This will update the production website.**

```sh
npm run deploy
```
