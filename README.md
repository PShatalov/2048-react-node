# Description

I used several ready solutions:
  - Create React App
  - My own boilerplate for express API
  - CSS code copied from some solution at codepen.io

To start app:
    - Install Node.js LTS
    - Clone this repository
    - Make sure that local ports 3000 and 4000 are not in use
And then run in the root folder
```sh
$ npm install
$ npm start
```
API will be available at localhost:4000 and game frontend at localhost:3000
Use button A to move the field to the left, D - right, W - up and S down

To start tests:
```sh
$ cd frontend
$ npm run test
```
### API docs

API is mocked and not connected to FE. I added several API controllers just to describe possible future steps in development.

| Method | Route | Description|
| ------ | ------ | ------ |
| POST | /api/users | Create user |
| GET | /api/users/:id | Get user by id |
| PATCH | /api/users/:id | Update user by id |

| Method | Route | Description|
| ------ | ------ | ------ |
| POST | /api/statistics/:id | Save user's game result |
| GET | /api/statistics/:id | Get user's finished games list |
| GET | /api/statistics/:id/max-score | Get user's highest score |
| GET | /api/statistics/ranking | Get user rankings |

### Possible future steps
- Optimize move methods of the game algorithm
- Add different application environments
- Add tests for API
- Dockerize Application