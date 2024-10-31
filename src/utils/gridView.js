export const getGridViewType = () => {
  return localStorage.getItem("gridViewType") || 6; // 6-cols + 4-cols + 3-cols
};

export const setGridViewType = (viewType) => {
  localStorage.setItem("gridViewType", viewType);
};

export const getProductNumber = () => {
  return +localStorage.getItem("ProductNumber") || 50; // 50 / 100 / 150
};

export const setProductNumber = (ProductNumber) => {
  localStorage.setItem("ProductNumber", ProductNumber);
};

export const getSortType = () => {
  return +localStorage.getItem("SortType") || "desc"; // desc / asc
};

export const setSortType = (SortType) => {
  localStorage.setItem("SortType", SortType);
};
