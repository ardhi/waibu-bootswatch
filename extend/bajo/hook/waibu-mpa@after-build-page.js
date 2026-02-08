async function waibuMpaAfterBuildPage ({ $, theme, req }) {
  if (req.darkMode && theme.framework === 'bootstrap') $('body').attr('data-bs-theme', 'dark')
}

export default waibuMpaAfterBuildPage
