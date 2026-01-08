async function waibuMpaAfterBuildPage ({ $, theme, req }) {
  if (req.darkMode && theme.framework === 'bootstrap') $('html').attr('data-bs-theme', 'dark')
}

export default waibuMpaAfterBuildPage
