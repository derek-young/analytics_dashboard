# Accenture Analytics Dashboard

To build the base application with local Node.js tooling, run the following commands:
```
npm install
npm run build
```

## Users

Default username is ***accenture*** and password ***admin***.  To add additional users, perform a POST operation to `/api/user` with *x-www-form-urlencoded* data containing `username` and `password` parameters in the body.  Newly added users should be able to login immediately.

## Database

The database utilized sqlite for local deployment without infrastructure requirements.  The `sequelize` package for Node.js has been utilized to assist with database management ease.  The SQLite database file is located in `server/db`.

## Dependencies

The following are the documented dependencies required to power the server instance with NodeJS.

 * axios
 * bcrypt
 * body-parser
 * express
 * jsonwebtoken
 * morgan
 * sequelize
 * sqlite3
