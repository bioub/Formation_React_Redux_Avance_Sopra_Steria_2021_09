const { increment, setStep } = require("./actions");
const { configureStore } = require("./configureStore");
const { stepSelector, countSelector } = require("./selectors");

const store = configureStore();

store.subscribe(() => {
  console.log('step', stepSelector(store.getState()));
  console.log('count', countSelector(store.getState()));
});

store.dispatch(increment(stepSelector(store.getState())));
store.dispatch(setStep(5));