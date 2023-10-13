const initial_state = {
  hola: 'hola',
  [Symbol.iterator]: function () {
    let index = 0;
    const values = Object.values(this);

    return {
      next: () => {
        if (index < values.length) {
          return { value: values[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

export { initial_state };
