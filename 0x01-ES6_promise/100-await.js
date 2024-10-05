import { uploadPhoto, createUser } from './utils';

export default async function () {
  const newObj = {};

  await uploadPhoto().then((obj) => {
    newObj.photo = obj;
  });

  await createUser().then((obj) => {
    newObj.user = obj;
  });

  return newObj;
}
