import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { InmoArSdkRnViewProps } from './InmoArSdkRn.types';

const NativeView: React.ComponentType<InmoArSdkRnViewProps> =
  requireNativeViewManager('InmoArSdkRn');

export default function InmoArSdkRnView(props: InmoArSdkRnViewProps) {
  return <NativeView {...props} />;
}
