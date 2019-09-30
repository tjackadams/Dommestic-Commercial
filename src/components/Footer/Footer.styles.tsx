import { MobileSelector, TabletAndDesktopSelector } from "../../styling"
import { mergeStyleSets } from "@uifabric/styling"

export interface IFooterClassNames {
  footerRoot: string
  footerDesktopSeparator: string
  footerMobileSeparator: string
  footerOpeningTimes: string
  footerAdditionalContactInformation: string
  footerCopyrightInformation: string
  footerCredits: string
}

export const getClassNames = (): IFooterClassNames => {
  return mergeStyleSets({
    footerRoot: {
      marginTop: 20,
      marginBottom: 20,
    },
    footerDesktopSeparator: {
      height: 120,
      width: "5%",
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
      },
    },
    footerMobileSeparator: {
      paddingRight: "20%",
      paddingLeft: "20%",
      width: "100%",
      selectors: {
        [TabletAndDesktopSelector]: {
          display: "none",
        },
      },
    },
    footerOpeningTimes: {
      width: "38%",
      selectors: {
        [MobileSelector]: {
          textAlign: "center",
          width: "100%",
        },
      },
    },
    footerAdditionalContactInformation: {
      width: "38%",
      selectors: {
        [MobileSelector]: {
          textAlign: "center",
          width: "100%",
        },
      },
    },
    footerCopyrightInformation: {
      textAlign: "left",
      selectors: {
        [MobileSelector]: {
          textAlign: "center",
        },
      },
    },
    footerCredits: {
      textAlign: "right",
      selectors: {
        [MobileSelector]: {
          textAlign: "center",
        },
      },
    },
  })
}
