import React from "react"
import { Stack, Separator } from "office-ui-fabric-react"

import {
  AdditionalContactInformation,
  CopyrightInformation,
  Credits,
  OpeningTimes,
} from "../"

import { getClassNames } from "./Footer.styles"

export class Footer extends React.Component {
  public render(): JSX.Element {
    let {
      footerDesktopRoot,
      footerDesktopHeight,
      footerDesktopSeparator,
      footerDesktopGutter,
      footerDesktopCredits,
      footerMobileRoot,
      footerMobileSeparator,
      footerTextAlignCenter,
    } = getClassNames()

    return (
      <>
        <Stack tokens={{ childrenGap: 20 }} className={footerDesktopRoot}>
          <Stack.Item className={footerDesktopHeight}>
            <Stack
              horizontal
              horizontalAlign="center"
              verticalAlign="center"
              tokens={{ childrenGap: 40 }}
            >
              <Stack.Item>
                <OpeningTimes />
              </Stack.Item>
              <Stack.Item className={footerDesktopSeparator}>
                <Separator vertical />
              </Stack.Item>
              <Stack.Item>
                <AdditionalContactInformation />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack
              horizontal
              horizontalAlign="space-evenly"
              tokens={{ childrenGap: 60 }}
              className={footerDesktopGutter}
            >
              <Stack.Item>
                <CopyrightInformation />
              </Stack.Item>
              <Stack.Item className={footerDesktopCredits}>
                <Credits />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
        <Stack tokens={{ childrenGap: 20 }} className={footerMobileRoot}>
          <Stack.Item>
            <Stack tokens={{ childrenGap: 40 }}>
              <Stack.Item className={footerTextAlignCenter}>
                <OpeningTimes />
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item className={footerMobileSeparator}>
            <Separator />
          </Stack.Item>
          <Stack.Item className={footerTextAlignCenter}>
            <AdditionalContactInformation />
          </Stack.Item>
          <Stack.Item className={footerTextAlignCenter}>
            <CopyrightInformation />
          </Stack.Item>
          <Stack.Item className={footerTextAlignCenter}>
            <Credits />
          </Stack.Item>
        </Stack>
      </>
    )
  }
}
