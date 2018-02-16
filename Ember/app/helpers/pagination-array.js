import { helper } from '@ember/component/helper';

export function paginationArray(params/*, hash*/) {
  return Array.from(Array(params[0]).keys()).map(x => ++x);
}

export default helper(paginationArray);
