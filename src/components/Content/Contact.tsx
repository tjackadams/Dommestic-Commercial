import React from "react"
import { Text, FontWeights, Link, Icon, Stack } from "@fluentui/react"
import { Element } from "react-scroll"
import { getClassNames } from "./Contact.styles"

export class AreasWeCover extends React.Component {
  public render(): JSX.Element {
    const { addressText, awcTitle } = getClassNames()
    return (
      <Element name="areas-we-cover">
        <Text as="h2" block variant="xxLarge" className={awcTitle}>
          Areas we Service
        </Text>
        <Text as="p" block variant="mediumPlus" className={addressText}>
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
    )
  }
}

export class ContactInformation extends React.Component {
  public render(): JSX.Element {
    const {
      addressText,
      contactLink,
      contactLinkContainer,
      contactIcon,
      contactText,
      awcTitle,
    } = getClassNames()

    return (
      <Element name="contact">
        <Text as="h2" block variant="xxLarge" className={awcTitle}>
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
        <Text as="p" block variant="mediumPlus" className={addressText}>
          67 Merryfield Road
          <br />
          Dudley
          <br />
          West Midlands
          <br />
          DY1 2ND
          <br />
        </Text>
        <Stack styles={{ root: { marginTop: 20 } }}>
          <Stack.Item className={contactLinkContainer}>
            <Link as="a" href="tel:01384357446" className={contactLink}>
              <Icon iconName="phone" className={contactIcon} />

              <Text variant="mediumPlus" className={contactText}>
                01384 357446
              </Text>
            </Link>
          </Stack.Item>
          <Stack.Item className={contactLinkContainer}>
            <Link as="a" href="tel:07974243764" className={contactLink}>
              <Icon iconName="phone" className={contactIcon} />

              <Text variant="mediumPlus" className={contactText}>
                07974 243764
              </Text>
            </Link>
          </Stack.Item>
          <Stack.Item className={contactLinkContainer}>
            <Link
              as="a"
              href="mailto:&#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
              className={contactLink}
            >
              <Icon iconName="mail" className={contactIcon} />

              <Text variant="mediumPlus" className={contactText}>
                &#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
              </Text>
            </Link>
          </Stack.Item>
        </Stack>
      </Element>
    )
  }
}

export class OpeningTimes extends React.Component<{}> {
  public render(): JSX.Element {
    const { addressText } = getClassNames()
    return (
      <>
        <Text as="h3" variant="xLarge" block>
          Opening Times
        </Text>
        <Text as="p" variant="mediumPlus" className={addressText}>
          Monday 9:00 am - 5:00 pm
          <br />
          Tuesday 9:00 am - 5:00 pm
          <br />
          Wednesday 9:00 am - 5:00 pm
          <br />
          Thursday 9:00 am - 5:00 pm
          <br />
          Friday 9:00 am - 5:00 pm
          <br />
          Saturday 9:00 am - 2:00 pm
          <br />
          Sunday Closed
        </Text>
      </>
    )
  }
}

export class AdditionalContactInformation extends React.Component<{}> {
  public render(): JSX.Element {
    const {
      addressText,
      contactLink,
      contactLinkContainer,
      contactIcon,
      contactText,
    } = getClassNames()

    return (
      <>
        <Text as="h3" variant="xLarge" block nowrap>
          Domestic &#38; Commercial Drain Services
        </Text>
        <Text as="p" variant="mediumPlus" className={addressText}>
          67 Merryfield Road
          <br />
          Dudley
          <br />
          West Midlands
          <br />
          DY1 2ND
          <br />
        </Text>
        <Stack styles={{ root: { marginTop: 20 } }}>
          <Stack.Item className={contactLinkContainer}>
            <Link as="a" href="tel:01384357446" className={contactLink}>
              <Icon iconName="phone" className={contactIcon} />

              <Text variant="mediumPlus" className={contactText}>
                01384 357446
              </Text>
            </Link>
          </Stack.Item>
          <Stack.Item className={contactLinkContainer}>
            <Link as="a" href="tel:07974243764" className={contactLink}>
              <Icon iconName="phone" className={contactIcon} />

              <Text variant="mediumPlus" className={contactText}>
                07974 243764
              </Text>
            </Link>
          </Stack.Item>
          <Stack.Item className={contactLinkContainer}>
            <Link
              as="a"
              href="mailto:&#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
              className={contactLink}
            >
              <Icon iconName="mail" className={contactIcon} />

              <Text variant="mediumPlus" className={contactText}>
                &#115;&#116;&#101;&#118;&#101;&#116;&#111;&#109;&#107;&#105;&#110;&#115;&#53;&#51;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
              </Text>
            </Link>
          </Stack.Item>
        </Stack>
      </>
    )
  }
}

export class CopyrightInformation extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <Text>
        &copy; {new Date().getFullYear()} - Domestic &#38; Commercial Drain
        Services
      </Text>
    )
  }
}

export class Credits extends React.Component<{}> {
  public render(): JSX.Element {
    return <Text>Website design by ITadams</Text>
  }
}
