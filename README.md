# Project Description

This project is based on koa for the backend, vue3 for the front-end framework of the project.

After pulling the code: 
1. Run `npm i` to install the dependencies. 
2. Open a terminal and run `npm run server` to run the backend service on port 7777 and websocket service 9998
3. Open a new terminal and run `npm run dev` to run the frontend project.

# P.S.

After executing the above operations, the project should theoretically be able to run, however, during the testing process I also encountered a bit of not running.

Solution:
1. NPM downgrade: npm install npm@6 -g 
2. Then change the NPM source: npm config set registry https://registry.npmmirror.com/ 

Files I edit:
1. Files inside folder "src" and "koa"

Components already finished by others online:
1. The map component, so it probably contains some Chinese characters (hard to translate into English because of the complicated data structure of map).

Files you can ignore:
1. Files inside folder "node_modules"
2. All data and map files.
