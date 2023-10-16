function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
  return 1;
}
//использование - задание пропса
fetchWithAuth("a", "get");

let method = "post";

fetchWithAuth("s", method as "post");
