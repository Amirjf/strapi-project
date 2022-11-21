import React from 'react';

import { ThemeIcon, Text, useMantineTheme, Flex } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
  align?: any;
}

export default function TitleSection({
  icon: Icon,
  align = 'center',
  title,
  description,
}: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <Flex direction="column" align={align}>
      <ThemeIcon variant="light" size={40} radius={40}>
        {/* <Icon size={20} stroke={1.5} /> */}
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </Flex>
  );
}
