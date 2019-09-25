import React from "react"
import { Stack, Separator } from "office-ui-fabric-react"

import {
  AdditionalContactInformation,
  CopyrightInformation,
  Credits,
  OpeningTimes,
} from "../"

export class MobileFooter extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Stack
        tokens={{ childrenGap: 20 }}
        styles={{ root: { marginTop: 20, marginBottom: 20 } }}
      >
        <Stack.Item>
          <Stack tokens={{ childrenGap: 40 }}>
            <Stack.Item styles={{ root: { textAlign: "center " } }}>
              <OpeningTimes />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item
          styles={{ root: { paddingRight: "20%", paddingLeft: "20%" } }}
        >
          <Separator />
        </Stack.Item>
        <Stack.Item styles={{ root: { textAlign: "center" } }}>
          <AdditionalContactInformation />
        </Stack.Item>
        <Stack.Item styles={{ root: { textAlign: "center" } }}>
          <CopyrightInformation />
        </Stack.Item>
        <Stack.Item styles={{ root: { textAlign: "center" } }}>
          <Credits />
        </Stack.Item>
      </Stack>
    )
  }
}
