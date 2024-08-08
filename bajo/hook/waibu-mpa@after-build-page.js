async function waibuMpaAfterBuildPage ({ $, theme, reply }) {
  if (reply.request.darkMode && theme.framework === 'bootstrap') $('html').attr('data-bs-theme', 'dark')
}

export default waibuMpaAfterBuildPage
