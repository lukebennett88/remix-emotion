import { css } from "@emotion/css";
import { Container } from "@spark-web/container";
import { Link } from "@spark-web/link";
import { Row } from "@spark-web/row";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { TextLink } from "@spark-web/text-link";
import { useTheme } from "@spark-web/theme";

import { Logo } from "./logo";

export function Header() {
  const theme = useTheme();

  return (
    <Stack
      as="header"
      paddingX="large"
      paddingY="large"
      className={css({
        borderTopWidth: theme.spacing.small,
        borderColor: theme.color.background.primary,
        borderStyle: "solid",
      })}
    >
      <Container size="large">
        <Row alignY="center" gap="xxlarge">
          <Link
            href="/"
            className={css({
              color: theme.color.background.primary,
              display: "inline-flex",
              alignItems: "center",
              gap: theme.spacing.medium,
              ":hover": {
                color: theme.backgroundInteractions.primaryHover,
              },
              ":active": {
                color: theme.backgroundInteractions.primaryActive,
              },
            })}
          >
            <Logo
              className={css({
                height: theme.sizing.medium,
                width: theme.sizing.medium,
              })}
            />
            <Text weight="semibold">Luke Bennett</Text>
          </Link>
          <Row as="nav" gap="xxlarge" className={css({ marginLeft: "auto" })}>
            <Text>
              <TextLink href="/about">About</TextLink>
            </Text>
            <Text>
              <TextLink href="/posts">Posts</TextLink>
            </Text>
          </Row>
        </Row>
      </Container>
    </Stack>
  );
}
