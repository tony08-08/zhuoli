import zlRequest from "../..";
export function search(params) {
  return zlRequest.get({
    url: "/search",
    params,
  });
}
