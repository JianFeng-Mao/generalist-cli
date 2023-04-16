/**
 * 判断数据是否为空，可校验 数组、对象、undefined、null、''
 * @param {Array | Object | undefined | Null | String} data
 * @returns {Boolean}
 */
function isEmpty(data) {
  if (Array.isArray(data)) {
    return data.length === 0;
  }
  if (data !== null && typeof data === 'object') {
    return Object.keys(data).length === 0;
  }

  return [undefined, null, ''].includes(data);
}

module.exports = {
  isEmpty
};
