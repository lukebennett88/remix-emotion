import { Columns } from "@spark-web/columns";
import { Container } from "@spark-web/container";
import { Heading } from "@spark-web/heading";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { Me } from "~/components/vectors/me";

export default function Index() {
  return (
    <Stack gap="large" paddingY="xxlarge">
      <Container size="medium">
        <Columns
          alignY="center"
          gap="xxlarge"
          collapseBelow="tablet"
          paddingX="large"
        >
          <Stack gap="xlarge">
            <Heading level="1">Hi, I’m Luke</Heading>
            <Stack gap="medium">
              <Text tone="muted">I’m a front-end web designer/developer.</Text>
              <Text tone="muted">
                I specialise in making fast, accessible websites using modern
                technologies.
              </Text>
            </Stack>
          </Stack>
          <Me />
        </Columns>
      </Container>
    </Stack>
  );
}
