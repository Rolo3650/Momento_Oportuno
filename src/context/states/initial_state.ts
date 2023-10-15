export interface InitialState {
  hola: string;
  counter: number;
  filter: FilterState;

  [Symbol.iterator]: () => {
    next: () => {
      value?: string;
      done: boolean;
    };
  };
}

export type FilterParams = {
  state: number;
  query: string;
  category: number;
  subCategory?: number;
  priceMin?: number;
  priceMax?: number;
};

export type FilterState = Partial<FilterParams>;

const initial_state: InitialState = {
  hola: 'hola',
  counter: 0,
  filter: {
    state: 1,
    query: '',
    category: 0,
    subCategory: 0,
    priceMin: 0,
    priceMax: 0,
  },

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
