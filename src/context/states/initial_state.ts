import type { AppState } from '../context.type';

const app_state: AppState = {
  counter: 0,
  filterState: {
    state: 1,
    query: '',
    category: 0,
    subCategory: 0,
    priceMin: 0,
    priceMax: 0,
  },
  userState: null,
  adSingleState: { ad: null, loading: false },
  newAdForm: {
    name: '',
    category: null,
    subCategory: null,
    state: null,
    price: 0,
    desc: '',
    extraImgs: {
      set: false,
      value: '5',
      quantity: 3,
    },
    extraStates: {
      set: false,
      value: '1',
    },
    extraVideo: {
      set: false,
      type: "file",
      value: null,
    },
    print: false,
    feature: false,
    socialMedia: false,
    imgs: null,
    attributes: [],
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

export { app_state };
