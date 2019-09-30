import React from "react"
import { FontWeights, Link, Text } from "office-ui-fabric-react"
import { Element, scroller } from "react-scroll"

export class Services extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Element name="services">
        <Text
          as="h2"
          block
          variant="superLarge"
          styles={{
            root: {
              fontWeight: FontWeights.semibold,
              textAlign: "center",
            },
          }}
        >
          Our Services
        </Text>
        <Text
          as="p"
          block
          variant="xLarge"
          styles={{
            root: {
              fontWeight: FontWeights.semilight,
              textAlign: "center",
            },
          }}
        >
          We offer a fast &amp; efficient drainage service across the{" "}
          <Link
            onClick={() =>
              scroller.scrollTo("areas-we-cover", {
                smooth: true,
                offset: -70,
              })
            }
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
          >
            Contact us
          </Link>{" "}
          today to book our specialist drainage services.
        </Text>
      </Element>
    )
  }
}

const serviceHeaderStyle = {
  root: {
    fontWeight: FontWeights.semibold,
    marginTop: "0.4rem",
    marginBottom: 0,
  },
}

const serviceContentStyle = {
  root: {
    fontWeight: FontWeights.semilight,
    marginBottom: 0,
  },
}

export class ServiceOneHeader extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text as="h3" variant="xLarge" styles={serviceHeaderStyle}>
        Blocked Drains
      </Text>
    )
  }
}

export class ServiceOneContent extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text as="p" variant="mediumPlus" styles={serviceContentStyle}>
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

export class ServiceTwoHeader extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text as="h3" variant="xLarge" styles={serviceHeaderStyle}>
        Drainage
      </Text>
    )
  }
}

export class ServiceTwoContent extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text as="p" variant="mediumPlus" styles={serviceContentStyle}>
        Our drainage service covers both <i>Commercial Drains</i> and{" "}
        <i>Domestic Drains</i>. We understand how important it is to our
        customers that projects are managed effectively to ensure quick and
        successful completion with minimal disturbances for the business or
        residential property.
      </Text>
    )
  }
}

export class ServiceThreeHeader extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text as="h3" variant="xLarge" styles={serviceHeaderStyle}>
        Drain Cleaning
      </Text>
    )
  }
}

export class ServiceThreeContent extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text as="p" variant="mediumPlus" styles={serviceContentStyle}>
        Most drainage problems can be solved without pulling out the "big guns",
        but sometimes there are blockages that are so stubborn, they require
        something special. Let us help with our <i>high pressure jetting </i>
        service!
      </Text>
    )
  }
}
