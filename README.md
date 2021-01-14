# React Contentful Material Boilerplate

This is a boilerplate to simplify creation of production ready React apps.

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
 
### Contentful
1. Create account on [Contentful](www.contentful.com)
2. Create data models and data on Contentful
3. Get `SPACE_ID` and `ACCESS_TOKEN`
 
## Development
1. Add `SPACE_ID` and `ACCESS_TOKEN` to .env
2. Run the app
```
yarn start
```
3. Pick the best layout
4. Start development on selected layout 
## Deployment
### Heroku
1. Create [Heroku](heroku.com) account
2. Add Heroku app (New->Create new app)
3. Connect your Github branch to Heroku app (See [the tutorial](https://medium.com/quick-code/deploying-production-build-of-react-app-to-heroku-2548d8bf6936) )
4. Set env variables `SPACE_ID` and `ACCESS_TOKEN` on Heroku (Settings->Reveal Config Vars)
5. Push to the branch connected to Heroku
6. DONE :) 
