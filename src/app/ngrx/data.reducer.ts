import * as BackgroundDataActions from './data.actions';
import {BackgroundData} from './data.model';

// Section 1
const initialState: BackgroundData = {
  url: 'http://google.com'
};

// Section 2
export function reducer(state: BackgroundData[] = [initialState], action: BackgroundDataActions.Actions) {

  // Section 3
  switch (action.type) {
    case BackgroundDataActions.ADD_TUTORIAL:
      localStorage.setItem('background', action.payload.url);
      return action.payload;
    case BackgroundDataActions.REMOVE_TUTORIAL:
      localStorage.removeItem('background');
      return initialState;
    default:
      const item = localStorage.getItem('background');
      if (item) {
        return {url : item};
      }
      return initialState;
  }
}
