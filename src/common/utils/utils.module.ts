import { Global, Module } from '@nestjs/common';
import { FilterUtils } from './filter.utils';
import { SortUtils } from './sort.utils';

@Global()
@Module({
  providers: [SortUtils, FilterUtils],
  exports: [SortUtils, FilterUtils],
})
export class UtilsModule {}
