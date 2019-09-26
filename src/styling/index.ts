import {
  getScreenSelector,
  ScreenWidthMinMedium,
  ScreenWidthMaxLarge,
} from "office-ui-fabric-react"

export const MobileSelector = getScreenSelector(0, ScreenWidthMinMedium)
export const TabletSelector = getScreenSelector(
  ScreenWidthMinMedium,
  ScreenWidthMaxLarge
)
