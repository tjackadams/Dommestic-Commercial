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
      footerRoot,
      footerDesktopSeparator,
      footerMobileSeparator,
      footerOpeningTimes,
      footerAdditionalContactInformation,
      footerCopyrightInformation,
      footerCredits,
    } = getClassNames()

    return (
      <Stack tokens={{ childrenGap: 20 }} className={footerRoot}>
        <Stack.Item>
          <Stack
            horizontal
            horizontalAlign="center"
            verticalAlign="center"
            tokens={{ childrenGap: 40 }}
            wrap
          >
            <Stack.Item className={footerOpeningTimes}>
              <OpeningTimes />
            </Stack.Item>
            <Stack.Item className={footerDesktopSeparator}>
              <Separator vertical />
            </Stack.Item>
            <Stack.Item className={footerMobileSeparator}>
              <Separator />
            </Stack.Item>
            <Stack.Item className={footerAdditionalContactInformation}>
              <AdditionalContactInformation />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack
            horizontal
            horizontalAlign="center"
            tokens={{ childrenGap: 40 }}
            wrap
          >
            <Stack.Item className={footerCopyrightInformation}>
              <CopyrightInformation />
            </Stack.Item>
            <Stack.Item className={footerCredits}>
              <Credits />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    )
  }
}
