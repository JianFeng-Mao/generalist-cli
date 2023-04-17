const createAppNameQuestion = {
  type: 'input',
  name: 'name',
  message: 'Project Name',
  default: 'my-app'
};

const createAppTemplateQuestion = {
  type: 'list',
  name: 'template',
  message: 'Template',
  choices: [
    {
      name: '默认后台管理模板',
      short: '默认后台管理模板',
      value: 'admin'
    },
    {
      name: '自定义配置',
      short: '自定义配置',
      value: 'custom'
    }
  ]
};

const adminTemplateQuestion = {
  type: 'list',
  name: 'adminTemp',
  message: 'AdminTemp',
  choices: [
    {
      name: 'Vue2(vue-admin-template)',
      short: 'vue-admin-template',
      value: 'vue2'
    },
    // {
    //   name: 'Vue3(gin-vue-admin)',
    //   short: 'gin-vue-admin',
    //   value: 'vue3'
    // },
    {
      name: 'React(ant-design-pro)',
      short: 'ant-design-pro',
      value: 'react'
    }
  ]
};

const overWriteQuestion = {
  type: 'list',
  name: 'action',
  message: '当前目录已存在，是否覆盖？',
  choices: [
    {
      name: '覆盖',
      short: '覆盖并重新创建目标文件',
      value: 'overwrite'
    },
    {
      name: '取消',
      short: '取消',
      value: 'cancel'
    }
  ]
};

module.exports = {
  createAppNameQuestion,
  createAppTemplateQuestion,
  overWriteQuestion,
  adminTemplateQuestion
};
