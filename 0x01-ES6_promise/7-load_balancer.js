export default async function loadBalancer(chinaDownload, USDownload) {
  const a = Promise.race([chinaDownload, USDownload]);
  return a;
}
