const types = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'litera',
  'lumen', 'lux', 'materia', 'minty', 'morph', 'pulse', 'quartz', 'sandstone', 'simplex',
  'sketchy', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'vapor', 'yeti', 'zephyr']

async function theme () {
  return types.map(t => {
    const framework = 'bootstrap'
    const css = `waibuBootswatch.virtual:/bootswatch/${t}/bootstrap.min.css`
    return {
      name: t,
      framework,
      css,
      cssExcludes: 'waibuBootstrap.virtual:/bootstrap/css/bootstrap.min.css'
    }
  })
}

export default theme
