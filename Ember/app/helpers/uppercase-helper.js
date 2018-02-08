import { helper } from '@ember/component/helper';

export function uppercaseHelper(params/*, hash*/) {
  return params[0].toUpperCase();
}

export default helper(uppercaseHelper);
