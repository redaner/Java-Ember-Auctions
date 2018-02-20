import { helper } from '@ember/component/helper';

export function contains(params/*, hash*/) {
  return params[0].includes(params[1]);
}

export default helper(contains);
