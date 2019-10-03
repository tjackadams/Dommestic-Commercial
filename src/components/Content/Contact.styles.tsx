import { mergeStyleSets, FontSizes, getTheme } from "@uifabric/styling"

interface IContactClassNames {
  contactLink: string
  contactLinkContainer: string
  contactText: string
  contactIcon: string
  addressText: string
  awcTitle: string
}

export const getClassNames = (): IContactClassNames => {
  const theme = getTheme()

  return mergeStyleSets({
    addressText: {
      lineHeight: 24,
    },
    contactLinkContainer: {
      zIndex: 1,
      padding: 10,
      margin: -10,
    },
    contactLink: {
      height: 56,
      selectors: {
        ":hover": {
          textDecoration: "none",
        },
      },
    },
    contactText: {
      marginLeft: 10,
      fontSize: FontSizes.large,
    },
    contactIcon: {
      position: "relative",
      top: 2,
    },
    awcTitle: {
      fontSize: FontSizes.xxLarge,
      color: theme.palette.neutralDark,
    },
  })
}
