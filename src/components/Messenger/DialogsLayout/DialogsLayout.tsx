'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PropsWithChildren, Suspense } from 'react';
import * as S from './DialogsLayoutStyles';
import { FlexContainer } from '@/components/UI/common/FlexContainer';
import SearchIcon from '@/assets/svg/magnifier-icon.svg';
import FilterIcon from '@/assets/svg/filter-icon.svg';
import {
  MainSelect,
  MainSelectOptionType,
} from '@/components/UI/inputs/MainSelect/MainSelect';
import { SortingType } from '@/models/common';

const sortOptions: MainSelectOptionType<SortingType>[] = [
  { value: 'date', label: 'Date' },
  { value: 'relevance', label: 'Relevance' },
];

export const DialogsLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const sortType = params.get('sort');

  const handleSortChange = (value: string) => {
    router.push(pathname + '?sort=' + value);
  };
  return (
    <S.Container>
      <S.FiltersContainer>
        <S.SearchInput placeholder="Search" suffix={<SearchIcon />} />
        <FlexContainer $direction="row" $gap={24} $alignItems="center">
          Sort by
          <MainSelect
            value={sortType || 'relevance'}
            onChange={(e) => handleSortChange(e.target.value)}
            options={sortOptions}
          />
          <S.FilterButton variant="outlined">
            <FilterIcon />
            Filter
          </S.FilterButton>
        </FlexContainer>
      </S.FiltersContainer>
      <Suspense key={sortType} fallback={<div>Loading</div>}>
        {children}
      </Suspense>
    </S.Container>
  );
};
