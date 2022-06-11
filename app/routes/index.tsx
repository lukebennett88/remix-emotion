import { Container } from "@spark-web/container";
import { Heading } from "@spark-web/heading";
import { Stack } from "@spark-web/stack";
import { Text } from "@spark-web/text";
import { TextList } from "@spark-web/text-list";

export default function Index() {
  return (
    <Stack gap="large" paddingY="xxlarge">
      <Container size="medium">
        <Stack gap="large" paddingX="large">
          <Heading level="1">Welcome to Remix</Heading>
          <TextList>
            <Text>
              <a
                target="_blank"
                href="https://remix.run/tutorials/blog"
                rel="noreferrer"
              >
                15m Quickstart Blog Tutorial
              </a>
            </Text>
            <Text>
              <a
                target="_blank"
                href="https://remix.run/tutorials/jokes"
                rel="noreferrer"
              >
                Deep Dive Jokes App Tutorial
              </a>
            </Text>
            <Text>
              <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                Remix Docs
              </a>
            </Text>
          </TextList>
        </Stack>
      </Container>
    </Stack>
  );
}
