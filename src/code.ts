import * as Components from './figmaComponents';

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

figma.showUI(__html__, { height: 500, width: 400 });

figma.ui.onmessage = async ({ component, props }) => {
  await figma.loadFontAsync({
    family: 'SF Pro Text',
    style: 'Medium',
  });

  // needed to instantiate empty text node
  await figma.loadFontAsync({
    family: 'Roboto',
    style: 'Regular',
  });

  Components[component](props);

  figma.ui.postMessage({ type: 'analytics-event', event: 'completed' });
  figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
      figma.closePlugin();
  });
};
