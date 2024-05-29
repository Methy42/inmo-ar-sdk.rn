import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to InmoArSdkRn.web.ts
// and on native platforms to InmoArSdkRn.ts
import InmoArSdkRnModule from './InmoArSdkRnModule';
import InmoArSdkRnView from './InmoArSdkRnView';
import { ChangeEventPayload, InmoArSdkRnViewProps } from './InmoArSdkRn.types';

// Get the native constant value.
export const PI = InmoArSdkRnModule.PI;

export function hello(): string {
  return InmoArSdkRnModule.hello();
}

export async function setValueAsync(value: string) {
  return await InmoArSdkRnModule.setValueAsync(value);
}

const emitter = new EventEmitter(InmoArSdkRnModule ?? NativeModulesProxy.InmoArSdkRn);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { InmoArSdkRnView, InmoArSdkRnViewProps, ChangeEventPayload };
