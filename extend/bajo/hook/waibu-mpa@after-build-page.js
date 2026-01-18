async function waibuMpaAfterBuildPage ({ $, theme, req }) {
  console.log(theme)
  if (req.darkMode && theme.framework === 'bootstrap') $('body').attr('data-bs-theme', 'dark')
}

export default waibuMpaAfterBuildPage
