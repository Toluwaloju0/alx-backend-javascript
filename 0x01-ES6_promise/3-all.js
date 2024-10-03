import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  let string = '';

  await uploadPhoto().then((resolve) => {
    string = `${string + resolve.body} `;
  });
  await createUser().then((resolve) => {
    string = `${string + resolve.firstName} ${resolve.lastName}`;
  });

  console.log(string);
}
