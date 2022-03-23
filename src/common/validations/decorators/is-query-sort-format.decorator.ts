import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';

const QUERY_SORT_FIELD_FORMAT_REGEX = /^\w+:(asc|desc)$/;

export const IsQuerySortFormat = () =>
  Transform(({ value: fields }: { value: string[] }): string[] => {
    const fieldsWithWrongFormat = fields.filter(
      (field) => !QUERY_SORT_FIELD_FORMAT_REGEX.test(field),
    );
    if (fieldsWithWrongFormat.length) {
      throw new BadRequestException(
        `Some fields have the wrong format: ${fieldsWithWrongFormat.join(
          ', ',
        )}; the correct format is field:(asc|desc)`,
      );
    }
    return fields;
  });
