import { IConfig, createOvermind } from 'overmind';
// import { merge, namespaced } from 'overmind/config';
import { createHook } from 'overmind-react';

import { onInitialize } from './onInitialize';
import { state } from './state';
import * as actions from './actions';
import * as effects from './effects';

export const config = {
  onInitialize,
  state,
  actions,
  effects,
};

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {
    // fdfsd
  }
}
export const overmind = createOvermind(config, {
  devtools: true,
});

export const useOvermind = createHook<typeof config>();
