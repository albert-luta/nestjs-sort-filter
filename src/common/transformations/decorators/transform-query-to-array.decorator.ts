import { Transform } from 'class-transformer';

export const TransformQueryToArray = () =>
  Transform(({ value }: { value: string | string[] | undefined }): string[] => {
    console.log(value);
    if (value == null) {
      return [];
    }
    if (!Array.isArray(value)) {
      return [value];
    }
    return value;
  });
