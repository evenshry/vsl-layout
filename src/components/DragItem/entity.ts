import { ItemConfig } from '@/components/ItemPort/entity';
import { formatMessage } from 'umi-plugin-locale';
import { uuid } from '@/utils';

export const elementsTypeConfig: Array<Comp.EleType> = [
  {
    id: uuid(),
    type: ItemConfig.BACKGROUND,
    name: formatMessage({ id: 'drag.item.background' }),
  },
  {
    id: uuid(),
    type: ItemConfig.TITLE,
    name: formatMessage({ id: 'drag.item.title' }),
  },
];
