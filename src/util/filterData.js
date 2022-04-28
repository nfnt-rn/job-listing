// filterdata
export const filterData = (filters, dataset) => {
  let res = filters.some((a) => a.value === dataset[Object.keys(dataset)[0]])
    ? filters
    : [
        ...filters,
        {
          id: Object.keys(dataset)[0],
          value: dataset[Object.keys(dataset)[0]],
        },
      ];
  return res;
};

// data filter
export const dataFiltering = (filters, data) => {
  return data.filter((a) => {
    return filters.every((d) => a[d.id].includes(d.value));
  });
};

export const removeFilterData = (filters, filter) => {
  let result = filters
    .map((a) => {
      if (a.value === filter.value) {
        return null;
      } else {
        return a;
      }
    })
    .filter(Boolean);
  return result;
};

export const dataTags = (data, filterData) => {
  let res = data.reduce(
    (a, b) => [
      ...a,
      { role: b.role },
      { level: b.level },
      b.languages.map((a) => ({ languages: a })),
    ],
    []
  );
  res = res.filter((a, i) => res.indexOf(a) === i);
  return res;
};
