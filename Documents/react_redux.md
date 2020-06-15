# Part 1
https://youtu.be/Jqvz317E7fQ

Redux is a predictable state container for javascript.
This is use when we want to manage predictable our states.

/ in React we can use 'context' instead of 'redux'

React and Redux are very different and for simplify this we use 'react_redux' package.
and we can use redux for build software.

##Start using Redux

1.Run this command in cmd in project directory:
    
    npm init
this command create **package.json** that prepare our directory for create an application.

2.Install redux package:

    npm install redux
3.create ```index.js``` in Project directory.
Now we can run our project with:
    
    node index

##Three Redux core concepts

**1.Store**:
    
Where we save our states.


**2.Action**:
    
Introduce our activities.

**3.Reducer**:

Do some thing in the store [on states] according to activities declare action.

##Three Redux Principles

**1.We have an Store that save all States as object tree**

**2.We can change States Just when an Action occur**

**3.We should have Reducer for second principle(change states with an action)**

    const Reducer = (prevState, Action) => {
        Return newState;
    }

#Part 2
https://youtu.be/xZe58RCrZv4

##Actions
* Actions are the only way for access to our store.
* they are *plain js object* 
* they have an *type* property that show action type!

### Create an action:
First of all we set a name for our action:

    const BUY_MOB = 'BUY_MOB';
here we put action name in the variable for simplify using an call action.

Then we create an *CreateFunction* for simplify calling: 

    function buyMob() {
        return {
            type: BUY_MOB,
            info: "first Action"
        }
    }
### Create Reducer
Global Form:

    reducer = (CurrentState, Sction) => newState;

First initial our states:
    
    const initialState = {
        numOfMobs : 100
    }
our Reducer:
    
    const reducer = (state = initialState, action) {
        switch(action.type){
            case BUY_MOB : return{
                ...state,
                numOfMobs : state.numberOfMobs - 1
            }
            
            default: return state
        }
    }
* ```...state```: In real world we have lot of states and for updating
we should return back all states that we dont want to change and change some of them.
### Redux Store
* Notes:
1. this is saving all States of our application.
2. with ```getState()``` we can access States.
3. with ```dispatch(actoin)``` we can update our States.
4. we can Register a ```listenter```  that listen for doing something. such as:```subscribe(listener)```
5. we can Unregister a listener with Return that listener.

First we should import redux and initial createStore:
    
    const redux = require('redux);
    const createStore = redux.createStore
Now we can create our store:
    
    const store = createStore(reducer)
* Just we can have one store in our application.

Now we can access to store states with ```getState()```:
    
    console.log("Initial State is ", store.getState());
    
Now we want to register a listener:

    const unSubscribe = store.subscribe( () => console.log("Updated State is ", store.getState()) );

Now we want to Update States:

    store.dispatch(buyMob());
and now we want to Unregister our listener:
    
    unSubscribe();

## Multiple Reducer
We can do this with two way:

First Way:

First create new Action:
    
    const BUY_TAB = 'BUY_TAB';
And create new CreateFunction:
    
    function buyTab() {
        return (
            type: BUY_TAB,
            info: "Second action"
        );
    }
And Add new State:
    
    const initialState = {
        ...
        numOfTabs : 50
    }
Add new Action to last reducer:
    
    const reducer = (state = initalState, action) => {
        switch(action.type){
            ...
            cast BUY_TAB: return {
               ...state,
               numOfTabs : state.numOfTabs - 1    
            {
            ...
        }
    }

Second way:Multiple Reducer

Create two separate State:
    
    const initialMobState = {
        numOfMobs : 100
    }
    
    const initialTabState = {
        numOfTabs : 50
    }
Then create two Reducer:
    
    const MobReducer = (state = initalMobState, action) => {
        switch(action.type){
            cast BUY_MOB: return {
               ...state,
               numOfMobs : state.numOfMobs - 1    
            {
            
            default: return state
        }
    }
    
    const TabReducer = (state = initalTabState, action) => {
        switch(action.type){
            cast BUY_TAB: return {
               ...state,
               numOfTabs : state.numOfTabs - 1    
            {
            
            default: return state
        }
    }
Now we should combine Reducers with add this code to top of page:
    
    const combineReducers = redux.combineReducers;
Then before create our Store define our root Reducer:
    
    const rootReducer = combineReducers({
        mob : MobReducer,
        tab : TabReducer
    });
Then create our store:
    
    const store = createStore(rootReducer);
#Part 3
https://youtu.be/W7QrpfV3BO0

## Middleware
Middlewares are add-on functionality that we can 
add to our project and play roll such as third party 
and on any change do some thing. 

First of all we want install `redux-logger` to log the data in the middleware:
    
    npm install redux-logger
Then import this package to our project:
    
    const reduxLogger = require('redux-logger');
Now we should create logger function:
    
    const logger = reduxLogger.createLogger();
Now create *applyMiddleware* for add middleware ability to our project:
    
    const applyMiddleware = redux.applyMiddleware;
Now we can add middleware to our store:
    
    const store = createStore(rootReducer, applyMiddleware(logger));
Now if any change occur in our store, middleware running.
## Async Action

Often when we want to get data from an api we use this in our project.

our *initialState* is structure such as below:
    
    initialState = {
        loading : true, false,
        users : [],
        error : ''
    }
* `loading` : show loading/unloading status
* `users` : our data that we get from the api
* `error` : show our error in the process of Async Action.

Now we want to create three action for this states:
    
    FETCH_USERS_REQUEST
    FETCH_DATA_SUCCESS
    FETCH_DATA_FAILURE
And create actions arrow functions:
    
    const fetchUsersRequest = () => {
        return  {
            type : FETCH_USERS_REQUEST
        }
    }
    const fetchDataSuccess = users => {
        return  {
            type : FETCH_DATA_SUCCESS,
            payload : users
        }
    }
    const fetchDataFailure = error => {
        return  {
            type : FETCH_DATA_FAILURE,
            payload : error
        }
    }
* instead of `payload` we can put any key, it just for 
access to `users` in reducers.

 
And create our reducer:
    
    ...
        switch(action.type) {
            case FETCH_USERS_REQUEST: 
                return {
                    ...state,
                    loading : true
                }
            case FETCH_DATA_SUCCESS:
                return {
                    loading : false,
                    users = action.payload
                    error : ""
                }
            case FETCH_DATA_FAILURE:
                retuen {
                loading : false,
                users : [],
                error : action.payload
            }
        }
    ...

And create our store:
    
    const store = createStore(reducer);
this actions are Sync Actions for have Async Actions 
we should Know about Thunk Middleware.
## Thunk Middleware
First install two package:
    
    npm install axios redux-thunk
Now import applyMiddleware, thunkMiddleware, axios to our project:
    
    const thunkMiddleware = require('redux-thunk').default;
    const axios = require('axios');
    const applyMiddleware = redux.applyMiddleware;

Now create our Async Actions Creators:
    
    const fetchUsers = () => {
        return function(dispatch) {
            axios.get('http://fakerestapi.azurewebsites.net/api/Users')
                .then(Response => {
                   const users = Response.data.map(user => user.ID);
                   dispatch(fetchDataSuccess(users)); 
                })
                .catch(error => {
                    dispatch(fetchDataFailure(error.message));
                });
        }
    }
* using `dispatch` as function input to call other functions
in this Action Creator.

* http://fakerestapi.azurewebsites.net : this is a free website 
to get fake data to test our project.

And add this middleware to our store:
    
    const store = creatrStore(reducer, applyMiddleware(thunkMiddleware));
And create our listener:
    
    store.subscribe( () => { console.log(store.getData()) } )
And start requesting:
    
    store.dispatch(fetchUsers());
# Installing React-Redux
First create our react app:
    
    create-react-app react-redux1
Then install *redux* and *react-redux* dependencies:
    
    npm install redux react-redux
Now in *components* directory create *mobContainers.js*:
    
    import React from 'react';
    
    const mobContainer = () => {
        retuen(
            <div>
                <h1>Number of Mobiles</h1>
                <button>Buy</button>
            </div>
        );
    }
    
    export default mobContainer;
* for fast creating this structure in *vscode* we can use 
*React code snippet* extension.
Then add this container to *App.js*.

#Part 4
https://youtu.be/3lPjYiyD9VE

Action -> Reducer -> Redux Store
        State -> React App -> Dispatch

First create *redux* directory in *src*, and create 
*mob* directory in the *src/redux* path 
and add file *mobTypes.js* and define our action types here:
    
    export const BUY_MOB = 'BUY_MOB';
Then add file *mobActions.js* to *src/redux* path and create Actions 
and Action Creators in it.
    
    import {BUY_MOB} from './mobTypes';
    
    export const buyMob = () => {
        return {
            type : BUY_MOB
        } 
    }
now create our reducer file as *mobReducer.js* in *src/redux/mob/* path:
    
    import {BUY_MOB} from './mobTypes';
    
    const initialState = {
        numOfMobs : 100
    }
    
    const mobReducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_MOB: 
                return {
                    ...state,
                    numOfMobs : state.numOfMobs - 1 
                }
            default: return state
        }    
    }
    
    export default mobReducer;
Now create *store.js* file in *redux* dir:
    
    import {createStore} from 'redux';
    import mobReducer from './mob/mobReducer';
    
    const store = createStore(mobReducer);
    
    export default store;
Now connecting our app to redux, first import *Provider* to *App.js* 
for accessible store in all components. 
    
    ...
    import {Provider} from 'react-redux';
    import store from './redux/store/;
    ...
    ...
    function App() {
        return (
            <Provider store={store}>
                <div className="App">
                    <MobContainer />
                </div>
            </Provider>
        );
    }
Now for simplify accessibility to all Actions create an *index.js*
file in *redux* dir and import all Actions:
    
    export { buyMob } from './mob/mobActions';
Now *mobContainer* can access to our Store but can not 
access to *Dispatch* and *State*, therefor in this file we have: 
    
    import React from 'react';
    import {buyMob} from '../redux';
    import { connect } from 'react-redux';
    
    const mobContainer = (props) => {
        retuen(
            <div>
                <h1>Number of Mobiles - {props.numOfMobs}</h1>
                <button onClick(props.buyMob)>Buy</button>
            </div>
        );
    }
    
    const mapStateToProps = state => {
        return {
            numOfMobs: state.numOfMobs
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return{
            buyMob: () => dispatch(buyMob());
        }
    }
    
    
    export default connect(mapStateToProps, mapDispatchToProps)(mobContainer);
* `mapStateToProps` : with this function we can access to 
our states as props.

continue => 36:30

#Part 5
https://youtu.be/DB_BwHnQ0Ro