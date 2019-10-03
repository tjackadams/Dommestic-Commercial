import React from "react"
import { FontWeights, Link, Text, mergeStyleSets } from "office-ui-fabric-react"
import { Element, scroller } from "react-scroll"

interface IServicesClassNames {
  title: string
  link: string
  article: string
  serviceHeader: string
  serviceContent: string
}

const getClassNames = (): IServicesClassNames => {
  return mergeStyleSets({
    title: {
      fontWeight: FontWeights.semibold,
      textAlign: "center",
    },
    link: {
      selectors: {
        ":hover": {
          textDecoration: "none",
        },
      },
    },
    article: {
      fontWeight: FontWeights.semilight,
      textAlign: "center",
    },
    serviceHeader: {
      fontWeight: FontWeights.semibold,
      marginTop: "0.4rem",
      marginBottom: 0,
    },
    serviceContent: {
      fontWeight: FontWeights.semilight,
      marginBottom: 0,
    },
  })
}
export class Services extends React.Component<{}> {
  public render(): JSX.Element {
    const { title, link, article } = getClassNames()

    return (
      <Element name="services">
        <Text as="h2" block variant="superLarge" className={title}>
          Our Services
        </Text>
        <Text as="p" block variant="xLarge" className={article}>
          We offer a fast &amp; efficient drainage service across the{" "}
          <Link
            onClick={() =>
              scroller.scrollTo("areas-we-cover", {
                smooth: true,
                offset: -70,
              })
            }
            className={link}
          >
            West Midlands
          </Link>{" "}
          to help you when you need it most. Whether it be for Domestic or
          Commercial drains, our aim is to identify and resolve the issue on the
          very same day.{" "}
          <Link
            onClick={() =>
              scroller.scrollTo("contact", { smooth: true, offset: -70 })
            }
            className={link}
          >
            Contact us
          </Link>{" "}
          today to book our specialist drainage services.
        </Text>
      </Element>
    )
  }
}

export class ServiceOneHeader extends React.Component {
  public render(): JSX.Element {
    const { serviceHeader } = getClassNames()
    return (
      <Text as="h3" variant="xLarge" className={serviceHeader}>
        Blocked Drains
      </Text>
    )
  }
}

export class ServiceOneContent extends React.Component {
  public render(): JSX.Element {
    const { serviceContent } = getClassNames()
    return (
      <Text as="p" variant="mediumPlus" className={serviceContent}>
        Domestic &#38; Commercial Drain Services provide a bespoke service for
        clearing and unblocking all types of blocked drains. This includes, but
        is not limited to{" "}
        <i>
          Blocked Drains, Blocked Sewers, Blocked Toilets, Blocked Sinks,
          Blocked Basins and Blocked Baths.
        </i>
      </Text>
    )
  }
}

export class ServiceTwoHeader extends React.Component {
  public render(): JSX.Element {
    const { serviceHeader } = getClassNames()
    return (
      <Text as="h3" variant="xLarge" className={serviceHeader}>
        Drainage
      </Text>
    )
  }
}

export class ServiceTwoContent extends React.Component {
  public render(): JSX.Element {
    const { serviceContent } = getClassNames()
    return (
      <Text as="p" variant="mediumPlus" className={serviceContent}>
        Our drainage service covers both <i>Commercial Drains</i> and{" "}
        <i>Domestic Drains</i>. We understand how important it is to our
        customers that projects are managed effectively to ensure quick and
        successful completion with minimal disturbances for the business or
        residential property.
      </Text>
    )
  }
}

export class ServiceThreeHeader extends React.Component {
  public render(): JSX.Element {
    const { serviceHeader } = getClassNames()
    return (
      <Text as="h3" variant="xLarge" className={serviceHeader}>
        Drain Cleaning
      </Text>
    )
  }
}

export class ServiceThreeContent extends React.Component {
  public render(): JSX.Element {
    const { serviceContent } = getClassNames()
    return (
      <Text as="p" variant="mediumPlus" className={serviceContent}>
        Most drainage problems can be solved without pulling out the "big guns",
        but sometimes there are blockages that are so stubborn, they require
        something special. Let us help with our <i>high pressure jetting </i>
        service!
      </Text>
    )
  }
}
