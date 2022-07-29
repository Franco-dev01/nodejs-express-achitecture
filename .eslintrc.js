module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "react/react-in-jsx-scope": "off"
    }
}
