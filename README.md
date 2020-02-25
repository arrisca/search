# Search

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Database
Data is available inside src/assets/data. Install json-server or any http-server and point to this data json file
1. Install Json Server globally : 
    `npm install -g json-server`
2. go to src/assets/data folder
3. run command : 
    `json-server --watch database.json`
4. once server successfully started open `http://localhost:3000/books` on any of the browser to verify data.
