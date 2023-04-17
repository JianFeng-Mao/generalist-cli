const path = require('path');

const ADMIN_TEMPLATE_URL = {
  vue2: 'https://api.github.com/repos/PanJiaChen/vue-admin-template',
  vue3: 'https://api.github.com/orgs/aflipped-aurora/repos',
  react: 'https://api.github.com/repos/ant-design/ant-design-pro'
}

const TEMPLATE_MAP = {
};
// 模板路径
const TEMPLATE_Path = path.join(__dirname, '../template');

function getFullTempltePath(template) {
  return path.join(TEMPLATE_Path, TEMPLATE_MAP[template]);
}

module.exports = {
  getFullTempltePath,
  ADMIN_TEMPLATE_URL
};
