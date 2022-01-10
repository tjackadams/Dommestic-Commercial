import { mergeStyleSets, getTheme } from "@fluentui/react"

interface IContactFormClassNames {
  title: string
  submitButton: string
}

export const getClassNames = (): IContactFormClassNames => {
  const theme = getTheme()
  return mergeStyleSets({
    title: {
      color: theme.palette.neutralDark,
    },
    submitButton: {
      selectors: {
        ":hover": {
          backgroundColor: theme.palette.tealLight,
        },
        ":visited": {
          backgroundColor: theme.palette.tealLight,
        },
        ":active": {
          backgroundColor: theme.palette.tealLight,
        },
      },
    },
  })
}
