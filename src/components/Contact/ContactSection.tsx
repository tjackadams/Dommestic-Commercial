import React from "react"
import {
  DefaultPalette,
  FontWeights,
  Icon,
  Link,
  Stack,
  Text,
} from "office-ui-fabric-react"
import {
  ResponsiveMode,
  withResponsiveMode,
  IWithResponsiveModeState,
} from "office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode"
import { Element } from "react-scroll"

import ContactForm from "./ContactForm"

interface IContactSectionProps extends IWithResponsiveModeState {}
@withResponsiveMode
class ContactSection extends React.PureComponent<IContactSectionProps> {
  public render(): JSX.Element {
    const { responsiveMode = ResponsiveMode.xLarge } = this.props
    const isLargeDown = responsiveMode <= ResponsiveMode.large
    const isMediumDown = responsiveMode <= ResponsiveMode.medium
    const isSmallUp = responsiveMode > ResponsiveMode.small

    return (
      <Element name="contact">
        <Stack
          horizontal={isSmallUp}
          horizontalAlign={isMediumDown ? "center" : "space-between"}
          tokens={{ childrenGap: 40 }}
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
                We may still be able to help. Please do not hesitate to contact
                us with your enquiry.
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
              <Link
                as="a"
                href="tel:01384357446"
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
                <Icon
                  iconName="phone"
                  styles={{ root: { position: "relative", top: 2 } }}
                />

                <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                  01384 357446
                </Text>
              </Link>
            </div>
            <div style={{ paddingTop: 4 }}>
              <Link
                as="a"
                href="tel:07974243764"
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
                <Icon
                  iconName="phone"
                  styles={{ root: { position: "relative", top: 2 } }}
                />

                <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                  07974 243764
                </Text>
              </Link>
            </div>
            <div style={{ paddingTop: 4 }}>
              <Link
                as="a"
                href="mailto:&#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
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
                <Icon
                  iconName="mail"
                  styles={{ root: { position: "relative", top: 2 } }}
                />

                <Text variant="mediumPlus" styles={{ root: { marginLeft: 4 } }}>
                  &#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                </Text>
              </Link>
            </div>
          </Stack.Item>
          <Stack.Item>
            <Text as="h2" block variant="xxLarge">
              Contact us
            </Text>
            <ContactForm />
          </Stack.Item>
        </Stack>
      </Element>
    )
  }
}

export default ContactSection
