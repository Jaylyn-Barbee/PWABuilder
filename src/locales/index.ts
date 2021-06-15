import english from './en_US.json';
import lang from './languages.json';

export type langType = {
  code: string;
  name: string;
};

export type langCodes = {
  formatted: string;
  code: string;
};

function localization() {
  // TODO flesh out if we localize
  return english;
}

export const localeStrings = localization();

// use dot notation
export function locale(key: string): string {
  const steps = key.split('.');
  const length = steps.length;

  let value: any | string = localeStrings;
  for (let i = 0; i < length; i++) {
    value = value[steps[i]];
  }

  if (typeof value !== 'string') {
    return 'NO LOCALIZATION FOUND';
  }

  return value;
}

export const languageCodes: Array<langCodes> = lang.map((it: langType) => {
  return { formatted: it.name, code: it.code };
});
