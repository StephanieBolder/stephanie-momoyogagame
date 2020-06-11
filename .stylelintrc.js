module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "tailwind"
      ]},],
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": null,
    
  },
}
