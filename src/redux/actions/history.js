export const newOperation = (obj) => ({
  type: "NEW_OPERATION",
  payload: obj,
});

export const clearHistory = () => ({
  type: "CLEAR_HISTORY",
});
