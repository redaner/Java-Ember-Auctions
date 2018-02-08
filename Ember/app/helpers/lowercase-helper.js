import { helper } from '@ember/component/helper';

export function lowercaseHelper(params/*, hash*/) {
  return params[0].toLowerCase();
}

export default helper(lowercaseHelper);
