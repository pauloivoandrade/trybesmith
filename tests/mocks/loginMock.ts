const validPassword = 'ch4ng3m3';
const noUsernameLoginBody = { username: '', password: validPassword };

const validUsername = 'user1@email.com';
const noPasswordLoginBody = { username: validUsername, password: '' };

const notExistingUserBody = { username: 'notfound@email.com', password: validPassword };

const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const hashedPassword = '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW';
const existingUser = { 
  id: 1, 
  username: validUsername,
  password: hashedPassword,
  name: 'user1'
};

const validLoginBody = { username: validUsername, password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};