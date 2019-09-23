import React from "react"
import { Stack, Text, FontWeights } from "office-ui-fabric-react"
import { Element } from "react-scroll"

import { MobileNavigation } from "../Navigation"

export class MobileHeader extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Element name="home">
        <Stack
          horizontal
          horizontalAlign="center"
          verticalAlign="center"
          tokens={{ childrenGap: 8 }}
          styles={{
            root: {
              minHeight: 40,
            },
          }}
        >
          <Stack.Item>
            <MobileNavigation />
          </Stack.Item>
          <Stack.Item>
            <Text
              variant="large"
              styles={{ root: { fontWeight: FontWeights.semibold } }}
            >
              Domestic &#38; Commercial Drain Services
            </Text>
          </Stack.Item>
        </Stack>
      </Element>
    )
  }
}
