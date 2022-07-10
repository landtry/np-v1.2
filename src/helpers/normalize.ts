export const getDate = (timestamp: string) => {
  const date = new Date();
  return {
    date: date.toLocaleDateString(),
    time:
      date.toLocaleTimeString().split(" ")[0].split(":").slice(0, 2).join(":") +
      " " +
      date.toLocaleTimeString().split(" ")[1],
  };
};
