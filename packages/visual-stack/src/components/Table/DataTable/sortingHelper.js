import React from 'react';
import * as R from 'ramda';
import ArrowDownIcon from 'mdi-react/ArrowDownIcon';
import ArrowUpIcon from 'mdi-react/ArrowUpIcon';

export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';

export const getSortingIcon = (sortingOption, currentLabel) => {
  let icon = null;
  if (sortingOption.order === ASCENDING) {
    icon = <ArrowUpIcon/>;
  }
  if (sortingOption.order === DESCENDING) {
    icon = <ArrowDownIcon/>;
  }
  if (sortingOption.label !== currentLabel) {
    icon = <ArrowDownIcon className="vs-unsorted-row-icon"/>;
  }
  return icon;
};

const ascend = R.curry(function ascend(fn, value, consecutiveValue) {
  const valueClone = fn(value);
  const consecutiveValueClone = fn(consecutiveValue);
  return valueClone === null ? -1 : consecutiveValueClone === null ? 1 : valueClone < consecutiveValueClone ? -1 : valueClone > consecutiveValueClone ? 1 : 0;
});

const descend = R.curry(function descend(fn, value, consecutiveValue) {
  const valueClone = fn(value);
  const consecutiveValueClone = fn(consecutiveValue);
  return valueClone === null ? 1 : consecutiveValueClone === null ? -1 : valueClone > consecutiveValueClone ? -1 : valueClone < consecutiveValueClone ? 1 : 0;
});

const sort = (order) => (index, data) =>
  R.sortWith([order(R.path(['row', index]))])(data);

const sortAscendingByIndex = sort(ascend);
const sortDescendingByIndex = sort(descend);

const sortingFunctionMap = {
  [ASCENDING]: sortAscendingByIndex,
  [DESCENDING]: sortDescendingByIndex,
};

export const sortData = (index, order, data) =>
  sortingFunctionMap[order](index, data);

export const getNextOrder = order => {
  if (!order || order === ASCENDING) return DESCENDING;
  if (order === DESCENDING) return ASCENDING;
};

export const getNextData = (index, currentOrder, data) =>
  sortData(index, getNextOrder(currentOrder), data);
