import { mergeStyleSets, DefaultPalette, FontWeights } from "@uifabric/styling"
import { MobileSelector } from "../../styling"

export interface ILayoutClassNames {
  footer: string
  layoutContainer: string
  mapContainer: string
  sloganText: string
}

export const getClassNames = (): ILayoutClassNames => {
  return mergeStyleSets({
    footer: {
      backgroundColor: DefaultPalette.neutralPrimary,
      color: DefaultPalette.white,
    },
    layoutContainer: {
      width: "calc(100vw - (100vw - 100%))",
    },
    mapContainer: {
      height: 480,
      display: "flex",
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
      },
    },
    sloganText: {
      position: "absolute",
      top: "10%",
      left: "20%",
      color: DefaultPalette.white,
      fontWeight: FontWeights.semibold,
      selectors: {
        [MobileSelector]: {
          display: "none",
        },
      },
    },
  })
}
