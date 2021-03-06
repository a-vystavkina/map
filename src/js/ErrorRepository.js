export default class ErrorRepository {
  constructor() {
    this.mapError = new Map();
  }

  errorSet(key, text) {
    this.mapError.set(key, text);
  }

  translate(code) {
    if (this.mapError.get(code)) {
      return this.mapError.get(code);
    }

    return 'Unknown error';
  }
}
