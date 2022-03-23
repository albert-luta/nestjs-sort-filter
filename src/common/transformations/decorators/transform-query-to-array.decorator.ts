import { Transform } from 'class-transformer';

export const TransformQueryToArray = () =>
  Transform(({ value }: { value: string | string[] | undefined }): string[] => {
    if (value == null) {
      return [];
    }
    if (!Array.isArray(value)) {
      return [value];
    }
    return value;
  });
