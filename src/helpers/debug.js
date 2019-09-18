export default function debug() {
  // eslint-disable-next-line
  const log = console.log

  // eslint-disable-next-line
  console.log = function debugLog(...args) {
    log.apply(
      console,
      args.map(item => {
        if (typeof item !== 'object') {
          return item
        }

        try {
          return JSON.stringify(item, null, 2)
        } catch (err) {
          return item
        }
      })
    )
  }
}
