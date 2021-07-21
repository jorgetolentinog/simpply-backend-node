#DEBUG=app:*,-app:http npx nodemon index.js

npx ts-node-dev --quiet -r tsconfig-paths/register src/server.ts
