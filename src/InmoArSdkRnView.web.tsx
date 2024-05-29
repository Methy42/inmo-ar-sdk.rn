import * as React from 'react';

import { InmoArSdkRnViewProps } from './InmoArSdkRn.types';

export default function InmoArSdkRnView(props: InmoArSdkRnViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
