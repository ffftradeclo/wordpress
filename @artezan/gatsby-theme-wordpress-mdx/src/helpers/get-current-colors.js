export const getCurrentColors = context => {
  const mode = context.colorMode
  if (mode && context.theme.colors.modes[mode]) {
    return context.theme.colors.modes[mode]
  } else {
    return context.theme.colors
  }
}
