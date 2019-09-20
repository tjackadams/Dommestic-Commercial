import React from "react"
import Img from "gatsby-image"
import {
  FontWeights,
  initializeIcons,
  Link,
  Separator,
  Stack,
  Text,
  ITextStyles,
} from "office-ui-fabric-react"
import {
  Card,
  ICardStyles,
  ICardItemStyles,
  ICardSectionStyles,
} from "@uifabric/react-cards"
import {
  withResponsiveMode,
  IWithResponsiveModeState,
  ResponsiveMode,
} from "office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode"

const cardStyle: ICardStyles = {
  root: {
    maxWidth: 767,
    selectors: {
      ["@media(max-width: 479px)"]: {
        maxWidth: 335,
      },
    },
  },
}

const cardImageStyle: ICardItemStyles = {
  root: {
    width: 180,
    selectors: {
      ["@media(max-width: 479px)"]: {
        width: 335,
      },
    },
  },
}

const cardContentStyle: ICardSectionStyles = {
  root: {
    textAlign: "center",
    paddingRight: 12,
    selectors: {
      ["@media(max-width: 479px)"]: {
        textAlign: "center",
        paddingRight: 12,
        paddingLeft: 12,
        paddingBottom: 12,
      },
    },
  },
}

interface IServiceCardProps extends IWithResponsiveModeState {
  image: any
  imageAlt: string
}

@withResponsiveMode
class ServiceCard extends React.PureComponent<IServiceCardProps> {
  public render(): JSX.Element {
    const {
      image,
      imageAlt,
      responsiveMode = ResponsiveMode.xLarge,
    } = this.props
    const isSmallUp = responsiveMode > ResponsiveMode.small

    return (
      <Card compact={isSmallUp} styles={cardStyle}>
        <Card.Item fill styles={cardImageStyle}>
          <Img fluid={image} alt={imageAlt} />
        </Card.Item>
        <Card.Section grow styles={cardContentStyle}>
          {this.props.children}
        </Card.Section>
      </Card>
    )
  }
}

export default ServiceCard
