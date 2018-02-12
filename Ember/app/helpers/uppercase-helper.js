import { helper } from '@ember/component/helper';

/**
 * Method converts string to all uppercase,
 * used for templating header component.
 * @param {string} params 
 */
export function uppercaseHelper(params/*, hash*/) {
  return params[0].toUpperCase();
}

export default helper(uppercaseHelper);
