import moment from "moment";

export const formatDate = (date) => {
  return moment(date).format("dddd, DD MMM YYYY");
};
