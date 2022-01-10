import { mergeStyleSets, FontSizes, FontWeights } from "@fluentui/react"
import { MobileSelector, TabletSelector } from "../../styling"

export interface IHeaderClassNames {
  headerWrapper: string
  headerHideMobile: string
  headerTitle: string
  headerSubtitleContainer: string
  headerSubtitle: string
  headerPhoneLink: string
  headerPhoneIcon: string
  headerPhoneText: string
}
export const getClassNames = (): IHeaderClassNames => {
  return mergeStyleSets({
    headerWrapper: {
      justifyContent: "center",
      minHeight: 60,
      selectors: {
        [MobileSelector]: {
          minHeight: 40,
        },
        [TabletSelector]: {
          justifyContent: "space-evenly",
        },
      },
    },
    headerHideMobile: {
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
        [TabletSelector]: {
          display: "none",
        },
      },
    },
    headerTitle: {
      fontSize: FontSizes.xLarge,
      fontWeight: FontWeights.semibold,
      selectors: {
        [MobileSelector]: {
          fontSize: FontSizes.large,
        },
        [TabletSelector]: {
          fontSize: FontSizes.large,
        },
      },
    },
    headerSubtitleContainer: {
      marginRight: 60,
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
        [TabletSelector]: {
          display: "none",
        },
      },
    },
    headerSubtitle: {
      fontWeight: FontWeights.semibold,
      fontSize: FontSizes.xLarge,
    },
    headerPhoneLink: {
      color: "inherit",
      selectors: {
        ":hover": {
          textDecoration: "none",
        },
      },
    },
    headerPhoneIcon: {
      fontSize: FontSizes.xLarge,
      position: "relative",
      top: 3,
    },
    headerPhoneText: {
      marginLeft: 10,
      fontWeight: FontWeights.regular,
    },
  })
}
