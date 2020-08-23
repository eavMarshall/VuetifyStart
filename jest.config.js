module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleNameMapper: {
        "^@root(.*)$": "<rootDir>/src$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@plugins(.*)$": "<rootDir>/src/plugins",
        "^@appPages(.*)$": "<rootDir>/src/pages/app",
        "^@assets(.*)$": "<rootDir>/src/assets"
    }
}
