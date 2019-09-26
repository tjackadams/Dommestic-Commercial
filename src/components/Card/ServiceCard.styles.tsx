import { MobileSelector } from "../../styling"
import { mergeStyleSets, ScreenWidthMinUhfMobile } from "@uifabric/styling"

export interface IServiceCardClassNames {
  compactCard: string
  compactCardImage: string
  compactCardSection: string
  card: string
  cardTitle: string
  cardImage: string
    cardSection: string
}

export const getClassNames = (): IServiceCardClassNames => {
  return mergeStyleSets({
    compactCard: {
      maxWidth: ScreenWidthMinUhfMobile,
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
      },
    },
    compactCardImage: {
      width: 180,
    },
    compactCardSection: {
      textAlign: "center",
      paddingRight: 12,
    },
    card: {
      display: "none",
      maxWidth: 335,
      selectors: {
        [MobileSelector]: {
          display: "block",
        },
      },
    },
    cardTitle: {
      textAlign: "center",
      paddingTop: 5,
    },
    cardImage: {
      width: 335,
    },
    cardSection: {
      textAlign: "center",
      paddingRight: 12,
      paddingLeft: 12,
      paddingBottom: 12,
    },
  })
}
