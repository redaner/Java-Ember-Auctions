import { helper } from '@ember/component/helper';

export function ifEquals(params/*, hash*/) {
  console.log(params[0] === params[1]);
  return params[0] === params[1];
}

export default helper(ifEquals);
