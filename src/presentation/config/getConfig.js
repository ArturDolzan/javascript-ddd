const {injectable, inject} = require('inversify');
const TYPES = require('../../ioc/types');

@injectable()
class GetConfigPresentation {
    @inject(TYPES.UserApplication) userApplication;

    async getUserById(id) {
      return await this.userApplication.getUserById(1);
    }
}

module.exports = GetConfigPresentation;
