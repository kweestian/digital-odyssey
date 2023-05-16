/* eslint-disable max-len */

import { isValidElement } from 'react';

/**
 * @see https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t
 * @param e the event you are checking
 */
export function assertIsNode(eventTarget: EventTarget | null): asserts eventTarget is Node {
  if (!eventTarget || !('nodeType' in eventTarget)) {
    throw new Error('Node expected');
  }
}

export const getNodeText = (node: React.ReactNode): string => {
  if (['string', 'number'].includes(typeof node)) {
    return String(node);
  }
  if (node instanceof Array) {
    return node.map(getNodeText).join('');
  }
  if (isValidElement(node)) {
    return getNodeText(node.props.children);
  }

  return '';
};

export function replaceAWSErrorCharacters(filename: string) {
  const illegalCharacters = /[/\\?%*:|"<>]/g; // AWS illegal characters regex
  const replacementCharacter = '_'; // Character to replace the illegal characters

  const sanitizedFilename = filename.replace(illegalCharacters, replacementCharacter);
  return sanitizedFilename;
}
