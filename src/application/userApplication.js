const {injectable, inject} = require('inversify');
const TYPES = require('../ioc/types');

@injectable()
class UserApplication {
    @inject(TYPES.UserRepository) userRepository;

    async getUserById(id) {
      return await this.userRepository.findUserById(id);
    }
}

module.exports = UserApplication;
