export default async function Api(api) {
  const res = await fetch(api);
  const data = res.json();
  return data;
}
