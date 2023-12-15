const {Container} = require('inversify');
const TYPES = require('./types');
const UserRepository = require('../infrastructure/repositories/userRepository');
const UserApplication = require('../application/userApplication');
const GetConfigPresentation = require('../presentation/config/getConfig');

const app = new Container();
app.bind(TYPES.UserRepository).to(UserRepository);
app.bind(TYPES.UserApplication).to(UserApplication);
app.bind(TYPES.GetConfigPresentation).to(GetConfigPresentation);

module.exports = app;
