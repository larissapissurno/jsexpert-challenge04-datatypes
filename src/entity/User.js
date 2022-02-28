class User {
  constructor({ id }) {
    this.id = id;
  }

  [Symbol.toPrimitive](coercionType) {
    if (coercionType === 'string') {
      return this.id; 
    }

    return this; 
  }
}

export default User;
