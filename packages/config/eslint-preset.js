module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/", "api/*/"],
    },
  },
  "rules": {
    "max-len": ["error", {"code": 120, "ignoreUrls": true}]
  }
};
