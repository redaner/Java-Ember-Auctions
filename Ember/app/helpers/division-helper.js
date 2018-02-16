import { helper } from '@ember/component/helper';

export function divisionHelper(params/*, hash*/) {
  return Math.floor(params[0] / 9) + 1;
}

export default helper(divisionHelper);
