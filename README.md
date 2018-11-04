## React Contentful Material Boilerplate

This is a boilerplate to simplify creation of production ready React app.

It uses: 
* create-react-app
* React Router
* Yarn (package management)
* MobX (state management)
* Material Design (frontend framework)
* Contentful (third party backend)
* Heroku (SaaS for easy deployment)

## Setup
```
yarn install
```
 
#### Contentful
1. Create account on Contentful
2. Create data models and data on Contentful
3. Get `SPACE_ID` and `ACCESS_TOKEN`
 
## Development
1. Add `SPACE_ID` and `ACCESS_TOKEN` to .env
2. Run the app
```
yarn start
```
 
## Deployment
#### Heroku
1. Create Heroku account
2. Add Heroku app
3. Connect your Github branch with Heroku app
4. Set env variables `SPACE_ID` and `ACCESS_TOKEN` on Heroku
5. Push to the branch connected to Heroku
6. DONE :) 
