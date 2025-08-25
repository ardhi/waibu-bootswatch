async function factory (pkgName) {
  const me = this

  class WaibuBootswatch extends this.lib.Plugin {
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
