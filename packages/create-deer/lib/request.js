const { ADMIN_TEMPLATE_URL } = require('./template');
// 通过 axios 处理请求
const axios = require('axios');

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoInfo(tempName) {
  return axios.get(ADMIN_TEMPLATE_URL[tempName])
}

/**
 * 获取版本信息
 * @param {string} owner 组织/用户名称
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repoFullName) {
  return axios.get(`https://api.github.com/repos/${repoFullName}/tags`)
}

module.exports = {
  getRepoInfo,
  getTagList
}