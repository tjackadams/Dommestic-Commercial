import {
  getScreenSelector,
  ScreenWidthMinMedium,
  ScreenWidthMaxLarge,
  ScreenWidthMaxXLarge,
} from "@fluentui/react"

export const MobileSelector = getScreenSelector(0, ScreenWidthMinMedium)
export const TabletSelector = getScreenSelector(
  ScreenWidthMinMedium,
  ScreenWidthMaxLarge
)
export const SmallDesktopSelector = getScreenSelector(
  ScreenWidthMaxLarge,
  ScreenWidthMaxXLarge
)

export const TabletAndDesktopSelector = getScreenSelector(
  ScreenWidthMinMedium,
  7680
)
