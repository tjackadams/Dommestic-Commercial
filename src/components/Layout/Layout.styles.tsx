import { mergeStyleSets, DefaultPalette, FontWeights } from "@uifabric/styling"
import {
  MobileSelector,
  TabletSelector,
  SmallDesktopSelector,
} from "../../styling"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

export interface ILayoutClassNames {
  banner: string
  bannerSpacer: string
  contentContainer: string
  footer: string
  header: string
  layoutContainer: string
  mapContainer: string
  sloganText: string
  sloganSubtitle: string
}

export const getClassNames = (): ILayoutClassNames => {
  return mergeStyleSets({
    banner: {
      width: "100%",
    },
    bannerSpacer: {
      height: 60,
      selectors: {
        [TabletSelector]: {
          display: "none",
        },
        [MobileSelector]: {
          display: "none",
        },
      },
    },
    contentContainer: {
      backgroundColor: DefaultPalette.white,
      maxWidth: 800,
      marginTop: 20,
      marginBottom: 40,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: "8%",
      paddingRight: "8%",
      boxShadow: Depths.depth4,
      selectors: {
        [TabletSelector]: {
          paddingLeft: "4%",
          paddingRight: "4%",
        },
        [MobileSelector]: {
          maxWidth: 375,
          marginTop: 0,
          paddingTop: 10,
          paddingLeft: "4%",
          paddingRight: "4%",
        },
      },
    },
    footer: {
      backgroundColor: DefaultPalette.neutralPrimary,
      color: DefaultPalette.white,
    },
    header: {
      backgroundColor: DefaultPalette.white,
      padding: 6,
      position: "fixed",
      zIndex: 999999,
      width: "100%",
      height: 60,
      selectors: {
        [TabletSelector]: { position: "unset", zIndex: "auto" },
        [MobileSelector]: {
          position: "unset",
          zIndex: "auto",
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
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
      top: "8%",
      left: "25%",
      color: DefaultPalette.white,
      fontWeight: FontWeights.semibold,
      selectors: {
        [SmallDesktopSelector]: {
          top: "5%",
          left: "20%",
        },
        [TabletSelector]: {
          display: "none",
        },
        [MobileSelector]: {
          display: "none",
        },
      },
    },
    sloganSubtitle: {
      color: DefaultPalette.white,
      fontWeight: FontWeights.semilight,
      selectors: {
        [TabletSelector]: {
          display: "none",
        },
        [MobileSelector]: {
          display: "none",
        },
      },
    },
  })
}
