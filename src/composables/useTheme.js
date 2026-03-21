import { ref, watch } from 'vue'

const theme = ref('light')
let initialized = false

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }

  return 'light'
}

function applyTheme(value) {
  const root = document.documentElement

  if (value === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

  localStorage.setItem('theme', value)
}

function initTheme() {
  if (initialized) return

  theme.value = getInitialTheme()
  applyTheme(theme.value)

  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  initialized = true
}

export function useTheme() {
  initTheme()

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme,
  }
}