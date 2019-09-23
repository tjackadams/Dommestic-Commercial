import React from "react"
import Img from "gatsby-image"
import {
  classNamesFunction,
  styled,
  IStyleFunction,
  ScreenWidthMinUhfMobile,
} from "office-ui-fabric-react"
import { Card } from "@uifabric/react-cards"
import {
  IServiceCardProps,
  IServiceCardStyleProps,
  IServiceCardStyles,
} from "./ServiceCard.types"

const getStyles: IStyleFunction<
  IServiceCardStyleProps,
  IServiceCardStyles
> = props => {
  return {
    root: {
      maxWidth: 335,
      selectors: {
        [`@media screen and (min-width: ${ScreenWidthMinUhfMobile}px)`]: {
          maxWidth: ScreenWidthMinUhfMobile,
        },
      },
    },
    image: {
      width: 335,
      selectors: {
        [`@media screen and (min-width: ${ScreenWidthMinUhfMobile}px)`]: {
          width: 180,
        },
      },
    },
    content: {
      textAlign: "center",
      paddingRight: 12,
      paddingLeft: 12,
      paddingBottom: 12,
      width: "100%",
      selectors: {
        [`@media screen and (min-width: ${ScreenWidthMinUhfMobile}px)`]: {
          paddingLeft: 0,
          paddingBottom: 0,
        },
      },
    },
  }
}

const getClassNames = classNamesFunction<
  IServiceCardStyleProps,
  IServiceCardStyles
>()

export class ServiceCardBase extends React.Component<IServiceCardProps> {
  public render(): JSX.Element {
    const { image, imageAlt, styles, isSmallDown = false, theme } = this.props

    const classNames = getClassNames(styles, { theme })

    return (
      <Card compact={!isSmallDown} className={classNames.root}>
        <Card.Item fill className={classNames.image}>
          <Img fluid={image} alt={imageAlt} />
        </Card.Item>
        <Card.Section className={classNames.content}>
          {this.props.children}
        </Card.Section>
      </Card>
    )
  }
}

export const ServiceCard: React.StatelessComponent<IServiceCardProps> = styled<
  IServiceCardProps,
  IServiceCardStyleProps,
  IServiceCardStyles
>(ServiceCardBase, getStyles, undefined, { scope: "ServiceCard" })
