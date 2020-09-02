// packages/components/stories/1-Button.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src/button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
