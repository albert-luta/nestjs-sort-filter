import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';

export const HaveValidQuerySortFields = <T extends Record<keyof T, unknown>>(
  acceptedFields: Record<keyof T, true>,
) => {
  const acceptedFieldsKeys = Object.keys(acceptedFields);

  return Transform(({ value: fields }: { value: string[] }): string[] => {
    const invalidFields = fields
      .map((field) => field.split(':')[0])
      .filter((field) => acceptedFieldsKeys.indexOf(field) === -1);
    if (invalidFields.length) {
      throw new BadRequestException(
        `Some fields are invalid: ${invalidFields.join(
          ', ',
        )}; the accepted fields are: ${acceptedFieldsKeys.join(', ')}`,
      );
    }
    return fields;
  });
};
