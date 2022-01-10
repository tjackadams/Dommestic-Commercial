import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { ScreenWidthMinUhfMobile } from "@fluentui/react"
import { Card } from "@fluentui/react-card"
import { MobileSelector } from "../../styling"
import { getClassNames } from "./ServiceCard.styles"

export class ServiceCard extends React.Component<{
  image: any
  imageAlt: string
  title?: any
}> {
  public render(): JSX.Element {
    const { children, image, imageAlt, title } = this.props

    let {
      compactCard,
      compactCardImage,
      compactCardSection,
      card,
      cardTitle,
      cardImage,
      cardSection,
    } = getClassNames()

    return <>
      <Card compact className={compactCard}>
        <Card.Item fill className={compactCardImage}>
          <GatsbyImage image={image} alt={imageAlt} />
        </Card.Item>
        <Card.Section className={compactCardSection}>
          {title}
          {children}
        </Card.Section>
      </Card>

      <Card className={card}>
        <Card.Item className={cardTitle}>{title}</Card.Item>
        <Card.Item fill className={cardImage}>
          <GatsbyImage image={image} alt={imageAlt} />
        </Card.Item>
        <Card.Section className={cardSection}>{children}</Card.Section>
      </Card>
    </>;
  }
}
