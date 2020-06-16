import { IConfig, createOvermind } from 'overmind';
// import { merge, namespaced } from 'overmind/config';
import { createHook } from 'overmind-react';

import { state } from './state';

export const config = {
  state,
};

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config, {
  devtools: true,
});

export const useOvermind = createHook<typeof config>();