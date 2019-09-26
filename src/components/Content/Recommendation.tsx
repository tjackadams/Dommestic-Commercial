import React from "react"
import { FontWeights, Text } from "office-ui-fabric-react"

export class Recommendation extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <>
        <Text
          as="h2"
          block
          variant="superLarge"
          styles={{
            root: {
              fontWeight: FontWeights.semibold,
            },
          }}
        >
          Why do our customers recommend us?
        </Text>
        <Text
          block
          variant="xxLarge"
          styles={{
            root: {
              fontWeight: FontWeights.regular,
            },
          }}
        >
          Excellent reputation for quality &#38; honesty.
        </Text>
        <Text
          block
          variant="xxLarge"
          styles={{
            root: {
              fontWeight: FontWeights.regular,
            },
          }}
        >
          Fast &#38; reliable service.
        </Text>
        <Text
          block
          variant="xxLarge"
          styles={{
            root: {
              fontWeight: FontWeights.regular,
            },
          }}
        >
          No VAT charges.
        </Text>
        <Text
          block
          variant="xxLarge"
          styles={{
            root: {
              fontWeight: FontWeights.regular,
            },
          }}
        >
          Fully insured, up to £2 million.
        </Text>
        <Text
          block
          variant="xxLarge"
          styles={{
            root: {
              fontWeight: FontWeights.regular,
            },
          }}
        >
          We do the dirty work, so you don't have to.
        </Text>
      </>
    )
  }
}
