#DEBUG=app:*,-app:http npx nodemon index.js

CONSOLA_LEVEL=6 npx ts-node-dev -r tsconfig-paths/register src/server.ts
