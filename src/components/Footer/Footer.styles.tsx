import { MobileSelector } from "../../styling"
import { mergeStyleSets } from "@uifabric/styling"

export interface IFooterClassNames {
  footerDesktopRoot: string
  footerDesktopHeight: string
  footerDesktopSeparator: string
  footerDesktopGutter: string
  footerDesktopCredits: string
  footerMobileRoot: string
  footerMobileSeparator: string
  footerTextAlignCenter: string
}

export const getClassNames = (): IFooterClassNames => {
  return mergeStyleSets({
    footerDesktopRoot: {
      marginTop: 20,
      marginBottom: 20,
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
      },
    },
    footerDesktopHeight: {
      height: 240,
    },
      footerDesktopSeparator: {
      height: 120,
    },
    footerDesktopGutter: {
      marginTop: 60,
    },
    footerDesktopCredits: {
      textAlign: "right",
    },
    footerMobileRoot: {
      marginTop: 20,
      marginBottom: 20,
      display: "none",
      selectors: {
        [MobileSelector]: {
          display: "flex",
        },
      },
    },
    footerMobileSeparator: {
      paddingRight: "20%",
      paddingLeft: "20%",
    },
    footerTextAlignCenter: {
      textAlign: "center",
    },
  })
}
