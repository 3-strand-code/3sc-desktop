import cp from 'child_process'
import Promise from 'bluebird'

const runNightmare = (testPath) => new Promise((resolve, reject) => {
  cp.execFile(`node`, [`app/content/lib/browser/${testPath}.js`], (err, stdout, stderr) => {
    if (err) {
      reject({ err, stdout, stderr })
    } else {
      resolve({ err, stdout, stderr })
    }
  })
})

export default runNightmare
