const getPageCount = (totalCount, limit) => Math.ceil(totalCount / limit);

export default getPageCount;

export const getPagesArray = (totalPages) => {
  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};
