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

#Part 4
https://youtu.be/3lPjYiyD9VE

#Part 5
https://youtu.be/DB_BwHnQ0Ro