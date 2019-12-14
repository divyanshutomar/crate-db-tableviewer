This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootstraping the project

- Run the CrateDB with Docker using

  `docker run -p "4200:4200" crate -Chttp.cors.enabled=true -Chttp.cors.allow-origin="*"`

- Start the react application with `yarn start`. This will start a development server on http://localhost:3000

## Seeding Sample Data

- When launching the Crate instance in Docker container, there won't be any data, so things may look a bit empty on the frontend applicaton.

- For seeding some data to the Crate instance, there are two approaches that uses the Crate Cloud Admin Console avaibale at http://localhost:4200:
  - Go to _help_ section, and use the import sample data option to pull some tweets from the twitter.
  - Got to _console_ section, and execute the SQL queries present in _seed.sql_ one by one.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
