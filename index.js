async function factory (pkgName) {
  const me = this

  return class WaibuBootswatch extends this.lib.Plugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'wbw'
      this.dependencies = ['waibu-mpa', 'waibu-bootstrap']
      this.config = {
        waibu: {
          prefix: 'bootswatch'
        }
      }
    }
  }
}

export default factory
