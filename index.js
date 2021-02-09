const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_CAKE_ACTION = { type: BUY_CAKE, info: 'First Redux Action' };

const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
const BUY_ICE_CREAM_ACTION = { type: BUY_ICE_CREAM, info: 'Second Redux Action' };

const initialCakeState = { numberOfCakes: 10 };
const initialIceCreamState = { numberOfIceCreams: 20 };

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: {
            return { ...state, numberOfCakes: state.numberOfCakes - 1 };
        }
        default: {
            return state;
        }
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: {
            return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
        }
        default: {
            return state;
        }
    }
}

const rootReducer = redux.combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer });

// Here we can apply all the middleware we need:
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger));
console.log('Initial state:', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(BUY_CAKE_ACTION);
store.dispatch(BUY_CAKE_ACTION);
store.dispatch(BUY_CAKE_ACTION);
store.dispatch(BUY_ICE_CREAM_ACTION);
store.dispatch(BUY_ICE_CREAM_ACTION);
store.dispatch(BUY_ICE_CREAM_ACTION);
unsubscribe();
