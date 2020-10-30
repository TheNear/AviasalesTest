export type CheckValue = (value: string | string[] | null | undefined) => string[] | false;

export const makeArray: CheckValue = (value) => {
  if (!value) return false;
  return Array.isArray(value) ? value : [value];
};
