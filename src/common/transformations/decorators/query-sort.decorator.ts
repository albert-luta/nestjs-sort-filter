import { applyDecorators } from '@nestjs/common';
import { HaveValidQuerySortFields } from 'src/common/validations/decorators/have-valid-query-sort-fields.decorator';
import { IsQuerySortFormat } from 'src/common/validations/decorators/is-query-sort-format.decorator';
import { TransformQuerySortToObject } from './transform-query-sort-to-object.decorator';
import { TransformQueryToArray } from './transform-query-to-array.decorator';

export const QuerySort = <T extends Record<keyof T, unknown>>(
  acceptedFields: (keyof T)[],
) => {
  return applyDecorators(
    // Transform single string value to array
    TransformQueryToArray(),
    // Check the format of the strings
    IsQuerySortFormat(),
    // Check the fields to be valid
    HaveValidQuerySortFields<T>(acceptedFields),
    // Transform from string to object
    TransformQuerySortToObject<T>(),
  );
};
