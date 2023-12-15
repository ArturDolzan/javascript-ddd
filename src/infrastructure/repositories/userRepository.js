const {injectable} = require('inversify');
const User = require('../../domain/user');

@injectable()
class UserRepository {
  async findUserById(id) {
    const user = new User(1, 'Teste Artur', 'artur@email.com', '123');

    return user;
  }
}

module.exports = UserRepository;
