import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';

export const HaveValidQuerySortFields = <T extends Record<keyof T, unknown>>(
  acceptedFields: (keyof T)[],
) =>
  Transform(({ value: fields }: { value: string[] }): string[] => {
    const invalidFields = fields
      .map((field) => field.split(':')[0])
      .filter((field) => acceptedFields.indexOf(field as keyof T) === -1);
    if (invalidFields.length) {
      throw new BadRequestException(
        `Some fields are invalid: ${invalidFields.join(
          ', ',
        )}; the accepted fields are: ${acceptedFields.join(', ')}`,
      );
    }
    return fields;
  });
