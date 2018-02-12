import { helper } from '@ember/component/helper';

/**
 * Method converts string to all lowercase,
 * used for templating header component.
 * @param {string} params 
 */
export function lowercaseHelper(params/*, hash*/) {
  return params[0].toLowerCase();
}

export default helper(lowercaseHelper);
