import { handle } from 'redux-pack';

import * as actionTypes from './dashboardActionTypes';
// import dashboardService from './dashboardService';
import translate from '../../locale';

const initialState = {
  errors: '',
  travelHistory: null,
  overallInfo: null,
  loading: false
};

const dashboardReducer = (state = initialState, action = '') => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_TRAVEL_HISTORY:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          errors: '',
          loading: true
        }),
        success: (prevState) => {
          return {
            ...prevState,
            travelHistory: [...payload]
          };
        },
        failure: (prevState) => ({
          ...prevState,
          errors: translate('common.failed')
        }),
        finish: (prevState) => ({
          ...prevState,
          loading: false
        })
      });

    case actionTypes.GET_OVERALL_INFO:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          errors: '',
          loading: true
        }),
        success: (prevState) => {
          return {
            ...prevState,
            overallInfo: { ...payload }
          };
        },
        failure: (prevState) => ({
          ...prevState,
          errors: translate('common.failed')
        }),
        finish: (prevState) => ({
          ...prevState,
          loading: false
        })
      });

    default:
      return state;
  }
};

export default dashboardReducer;
