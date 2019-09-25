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
