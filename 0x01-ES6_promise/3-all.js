import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((object) => {
    const [a, b] = object;
    console.log(`${a.body} ${b.firstName} ${b.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
