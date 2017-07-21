const chokidar = require('chokidar')
const exec = require('child_process').exec;

chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
  const commitMessage = new Date().toTimeString()
  exec('git add .')
  exec(`git diff-index --quiet HEAD || git commit -m "${commitMessage}"`)
  console.log(`commited at ${commitMessage}`)
})
