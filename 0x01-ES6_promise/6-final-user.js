import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : reason.toString(),
    })));
}