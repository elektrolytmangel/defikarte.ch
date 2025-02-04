import { createComponent } from '@lit/react';
import { MdFab } from '@material/web/fab/fab.js';
import React from 'react';

export type { FabSize, FabVariant } from '@material/web/fab/fab.js';

export default createComponent({
  tagName: 'md-fab',
  elementClass: MdFab,
  react: React,
  events: {
    onClick: 'click',
  },
});
