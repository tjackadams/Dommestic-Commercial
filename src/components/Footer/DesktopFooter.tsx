import React from "react"
import { Stack, Separator } from "office-ui-fabric-react"

import {
  AdditionalContactInformation,
  CopyrightInformation,
  Credits,
  OpeningTimes,
} from "../"

export class DesktopFooter extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Stack
        tokens={{ childrenGap: 20 }}
        styles={{ root: { marginTop: 20, marginBottom: 20 } }}
      >
        <Stack.Item styles={{ root: { height: 240 } }}>
          <Stack
            horizontal
            horizontalAlign="center"
            verticalAlign="center"
            tokens={{ childrenGap: 40 }}
          >
            <Stack.Item>
              <OpeningTimes />
            </Stack.Item>
            <Stack.Item styles={{ root: { height: 120 } }}>
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
            styles={{ root: { marginTop: 60 } }}
          >
            <Stack.Item>
              <CopyrightInformation />
            </Stack.Item>
            <Stack.Item styles={{ root: { textAlign: "right" } }}>
              <Credits />
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    )
  }
}
