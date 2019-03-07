var engine = require('./engine');

module.exports = engine({
  types: {
    "feat": {
      "description": "新功能，新特性",
      "title": "Features"
    },
    "fix": {
      "description": "修改bug, 问题",
      "title": "Bug Fixes"
    },
    "style": {
      "description": "格式、文案修改",
      "title": "Styles"
    },
    "refactor": {
      "description": "重构优化代码，不影响功能，并且也不会修复bug",
      "title": "Code Refactoring"
    },
    "perf": {
      "description": "性能优化，提升代码运行性能",
      "title": "Performance Improvements"
    },
    "test": {
      "description": "添加测试",
      "title": "Tests"
    },
    "build": {
      "description": "修改代码构建、打包相关",
      "title": "Builds"
    },
    "ci": {
      "description": "修改ci配置代码",
      "title": "Continuous Integrations"
    },
    "chore": {
      "description": "非代码类提交",
      "title": "Chores"
    },
    "revert": {
      "description": "撤消某次提交",
      "title": "Reverts"
    }
  },
  defaultType: process.env.CZ_TYPE,
  defaultScope: process.env.CZ_SCOPE,
  defaultSubject: process.env.CZ_SUBJECT,
  defaultBody: process.env.CZ_BODY,
  defaultIssues: process.env.CZ_ISSUES
});
