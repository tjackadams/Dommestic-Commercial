import React from "react"
import Img from "gatsby-image"
import { Card } from "@uifabric/react-cards"

import { IVerticalServiceCardProps } from "./ServiceCard.types"

export class VerticalCard extends React.Component<IVerticalServiceCardProps> {
  public render(): JSX.Element {
    const { children, image, imageAlt, title } = this.props

    return (
      <Card styles={{ root: { maxWidth: 335 } }}>
        <Card.Item styles={{ root: { textAlign: "center", paddingTop: 5 } }}>
          {title}
        </Card.Item>
        <Card.Item fill styles={{ root: { width: 335 } }}>
          <Img fluid={image} alt={imageAlt} />
        </Card.Item>
        <Card.Section
          styles={{
            root: {
              textAlign: "center",
              paddingRight: 12,
              paddingLeft: 12,
              paddingBottom: 12,
            },
          }}
        >
          {children}
        </Card.Section>
      </Card>
    )
  }
}
