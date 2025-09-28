/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * WaibuBootswatch class
   *
   * @class
   */
  class WaibuBootswatch extends this.app.pluginClass.base {
    static alias = 'wbw'
    static dependencies = ['waibu-mpa', 'waibu-bootstrap']

    constructor () {
      super(pkgName, me.app)
      this.config = {
        waibu: {
          prefix: 'bootswatch'
        }
      }
    }
  }

  return WaibuBootswatch
}

export default factory
