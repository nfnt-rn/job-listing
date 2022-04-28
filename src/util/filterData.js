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
  console.log(filters);
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

export const removeDuplicates = (data) =>
  data.filter((a, i) => data.indexOf(a) === i);

export const dataTags = (data, filterData) => {
  let res = data.reduce(
    (a, b) => ({
      ...a,
      role: a?.role ? removeDuplicates([b.role, ...a.role]) : [b.role],
      level: a?.level ? removeDuplicates([b.level, ...a.level]) : [b.level],
      languages: a?.languages
        ? removeDuplicates([...b.languages, ...a.languages])
        : [...b.languages],
    }),
    {}
  );
  return res;
};

export const tagsFilter = (tags, filters, searchvalue) => {
  return tags
    .filter((a) => a.toLowerCase().includes(searchvalue.toLowerCase()))
    .filter((b) => !filters.some((a) => a.value === b));
};

export const keyLookup = (tag, datatags) => {
  let res = Object.keys(datatags).filter((a) => {
    if (datatags[a].includes(tag)) {
      return true;
    }
    return false;
  })[0];
  console.log(res);
  return res;
};
