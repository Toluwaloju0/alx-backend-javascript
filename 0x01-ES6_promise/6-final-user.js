import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const list = []
  await signUpUser(firstName, lastName).then((obj) => {
    list.push({
      status: obj.status,
      value: obj
    });
  });

  await uploadPhoto(fileName).then((obj) => {
    list.push({
      status: obj.status,
      value: obj
    });
  });
  
  return list;
}
