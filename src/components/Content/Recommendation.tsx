import React from "react"
import { FontWeights, Text, mergeStyleSets, FontSizes } from "@fluentui/react"

interface IRecommendationStyles {
  title: string
  reason: string
}

const getClassNames = (): IRecommendationStyles => {
  return mergeStyleSets({
    title: {
      fontSize: FontSizes.superLarge,
      fontWeight: FontWeights.semibold,
    },
    reason: {
      fontSize: FontSizes.xxLarge,
      fontWeight: FontWeights.regular,
      lineHeight: 54,
    },
  })
}
export class Recommendation extends React.Component {
  public render(): JSX.Element {
    const { title, reason } = getClassNames()
    return (
      <>
        <Text as="h2" className={title}>
          Why do our customers recommend us?
        </Text>
        <Text block className={reason}>
          Excellent reputation for quality &#38; honesty.
        </Text>
        <Text block className={reason}>
          Fast &#38; reliable service.
        </Text>
        <Text block className={reason}>
          No VAT charges.
        </Text>
        <Text block className={reason}>
          Fully insured, up to £2 million.
        </Text>
        <Text block className={reason}>
          We do the dirty work, so you don't have to.
        </Text>
      </>
    )
  }
}
