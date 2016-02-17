const verify = require('./../lib/verify')

module.exports = () => ({
  title: "Sexy Shopping List",
  steps: [
    {
      title: "Install Node.js",
      isDone: verify.cliExists('node'),
    },
    {
      title: "Install git",
      isDone: verify.cliExists('git'),
    },
    {
      title: "Ensure npm is available",
      isDone: verify.cliExists('npm'),
    },
    {
      title: "Create index.html",
      isDone: verify.pathExists('index.html'),
    },
    {
      title: "Create /src directory",
      isDone: verify.pathExists('src'),
    },
  ],
})
