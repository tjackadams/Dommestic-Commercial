import React from "react"
import { Stack, FontWeights, Text } from "office-ui-fabric-react"
import { Element } from "react-scroll"

import { DesktopNavigation } from "../Navigation"

export class TabletHeader extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Element name="home">
        <Stack
          horizontal
          horizontalAlign="space-evenly"
          verticalAlign="center"
          tokens={{ childrenGap: 14 }}
          styles={{ root: { minHeight: 60 } }}
        >
          <Stack.Item>
            <Text
              variant="large"
              styles={{ root: { fontWeight: FontWeights.semibold } }}
            >
              Domestic &#38; Commercial Drain Services
            </Text>
          </Stack.Item>
          <Stack.Item>
            <DesktopNavigation />
          </Stack.Item>
        </Stack>
      </Element>
    )
  }
}
