const icons = require("office-ui-fabric-react/lib-commonjs/Icons")

console.log("icon", icons)
exports.onInitialClientRender = () => {
  icons.initializeIcons()
}
