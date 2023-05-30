import { useState } from 'react';

export interface UseSearchParams<T> {
  list: T[];
  isPrefilled?: boolean;
}

export interface UseSearchResult<T> {
  results: T[];
  matches?: number;
  isEmpty?: boolean;
  searchValue: string;
}

export interface UseSearchFunctions {
  onSearch: (value?: string) => void;
  onClear: () => void;
}

function getInitialValues(list: any[]): UseSearchResult<any> {
  return {
    results: list || [],
    searchValue: '',
    matches: list.length || 0,
    isEmpty: list.length === 0
  };
}

export function useSearch<T>(list: T[], field: keyof T): UseSearchResult<T> & UseSearchFunctions {
  const [result, setResult] = useState<UseSearchResult<T>>(getInitialValues(list));

  const getResults = (value: string): T[] => {
    return list.filter((item) => item[field] !== undefined && String(item[field]).includes(value));
  };

  const handleClear = () => {
    setResult(getInitialValues(list));
  };

  const handleChange = (value = '') => {
    if (!value || value === '') {
      handleClear();
      return;
    }

    const results = getResults(value);

    setResult({
      searchValue: value,
      results,
      isEmpty: results.length === 0,
      matches: results.length
    });
  };

  return {
    ...result,
    onSearch: handleChange,
    onClear: handleClear
  };
}
