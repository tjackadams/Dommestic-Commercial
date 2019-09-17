import React from "react"
import {
  DefaultPalette,
  FontWeights,
  Icon,
  Link,
  Stack,
  Text,
} from "office-ui-fabric-react"
import { Element } from "react-scroll"
import ErrorBoundary from "react-error-boundary"

import ContactForm from "./ContactForm"
import { IMediaQueryProps } from "../../types"

const ContactSection: React.FC<IMediaQueryProps> = props => {
  return (
    <Element name="contact">
      <Stack
        horizontal={!props.isSmall}
        horizontalAlign={props.isSmall ? "center" : "center"}
        tokens={{ childrenGap: 40 }}
        styles={{
          root: {
            animationName: "none !important",
            animationDuration: "unset !important",
            animationTimingFunction: "unset !important",
            animationFillMode: "none",
          },
        }}
      >
        <Stack.Item styles={{ root: { marginLeft: 20, marginRight: 20 } }}>
          <Element name="areas-we-cover">
            <Text as="h2" block variant="xxLarge">
              Areas we Service
            </Text>
            <Text as="p" block variant="mediumPlus">
              Dudley
              <br />
              Wolverhampton
              <br />
              Cradley Heath
              <br />
              Halesowen
              <br />
              Netherton
              <br />
              Stourbridge
              <br />
              Tipton
            </Text>
            <Text as="p" block variant="mediumPlus">
              Can't see your area listed above?
              <br />
              We may still be able to help. Please do not hesitate to contact us
              with your enquiry.
            </Text>
          </Element>
          <Text as="h2" block variant="xxLarge">
            Contact Information
          </Text>
          <Text
            as="h3"
            block
            variant="mediumPlus"
            styles={{ root: { fontWeight: FontWeights.semibold } }}
          >
            Domestic &#38; Commercial Drain Services
          </Text>
          <Text as="p" block variant="mediumPlus">
            67 Merryfield Road
            <br />
            Dudley
            <br />
            West Midlands
            <br />
            DY1 2ND
            <br />
          </Text>
          <div style={{ paddingTop: 4 }}>
            <Icon
              iconName="phone"
              styles={{ root: { position: "relative", top: 2 } }}
            />
            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              01384 357446
            </Text>
          </div>
          <div style={{ paddingTop: 4 }}>
            <Icon
              iconName="phone"
              styles={{ root: { position: "relative", top: 2 } }}
            />
            <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
              07974 243764
            </Text>
          </div>
          <div style={{ paddingTop: 4 }}>
            <Icon
              iconName="mail"
              styles={{ root: { position: "relative", top: 2 } }}
            />
            <Link
              as="a"
              href="mailto:stevetomkins53@gmail.com"
              styles={{
                root: {
                  selectors: {
                    ":hover": {
                      color: DefaultPalette.teal,
                      textDecoration: "none",
                    },
                  },
                },
              }}
            >
              <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                stevetomkins53@gmail.com
              </Text>
            </Link>
          </div>
        </Stack.Item>
        <Stack.Item>
          <Text as="h2" block variant="xxLarge">
            Contact us
          </Text>
          <ErrorBoundary
            FallbackComponent={({ componentStack, error }) => (
              <Text styles={{ root: { color: DefaultPalette.red } }}>
                There was a problem loading the contact form:{" "}
                {error!.toString()}
              </Text>
            )}
          >
            <ContactForm />
          </ErrorBoundary>
        </Stack.Item>
      </Stack>
    </Element>
  )
}

ContactSection.whyDidYouRender = true

export default ContactSection
