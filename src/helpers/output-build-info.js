/* eslint-disable no-console */
export default function outputBuildInfo() {
  console.clear()
  console.log(
    `%c${BUILD_INFO.name}%cv${BUILD_INFO.version}`,
    'background: #35495e; color: #fff; padding: 2px 4px; border-radius: 3px 0 0 3px;',
    'background: #19be6b; color: #fff; padding: 2px 4px; border-radius: 0 3px 3px 0;'
  ) // Output build info with colorful support.

  console.log(`Build at ${new Date(BUILD_INFO.time).toLocaleString()}`)
  console.log(`Hash: ${BUILD_INFO.hash}`)
}
