import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  #page = 1;
  #pageSize = 5;
  #hasData = true;

  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }

  async *list() {
    while(this.#hasData) {
      const { data } = await this.repository.list(this.#page++, this.#pageSize);

      this.#hasData = !!data;

      yield data?.map(crypto => new Crypto(crypto)) || [];

    }

    return [];
  }
}

export default CryptoService;
