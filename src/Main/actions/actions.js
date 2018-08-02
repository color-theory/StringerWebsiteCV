import {SELECT_PAGE} from './actionTypes';

export function selectPage(pageName) {
    return {
      type: SELECT_PAGE,
      pageName
    }
  }