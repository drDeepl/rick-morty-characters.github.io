import { BASE_API_URL } from '@/utils/constants';

class CharacterApi {
  constructor() {
    this.API_URL_CHARACTER = `${BASE_API_URL}/character`;
  }

  async getCharacters() {
    return fetch(this.API_URL_CHARACTER);
  }

  async getCharactersByFilter(data) {
    return fetch(`${this.API_URL_CHARACTER}?name=${data.name}&status=${data.status}`);
  }

  async getPageByUrl(url) {
    return fetch(url);
  }
}

export default new CharacterApi();
