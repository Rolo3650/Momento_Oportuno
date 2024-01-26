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
    id: '',
    name: '',
    category: null,
    subCategory: null,
    state: null,
    price: 0,
    desc: '',
    extraImgs: {
      set: false,
      value: '3',
      quantity: 3,
    },
    extraStates: {
      set: false,
      value: '1',
    },
    extraVideo: {
      set: false,
      type: 'file',
      value: null,
    },
    print: {
      set: false,
      value: '1',
      size: ''
    },
    feature: false,
    socialMedia: false,
    imgs: null,
    attributes: [],
    responseForm: null,
    package: null,
  },
  newDirectoryForm: {
    responseForm: null,
  },
  newMicrositeForm: {
    responseForm: null,
  },
  acountSettings: {
    open: false,
    userName: '',
    completeName: '',
    cellphone: '',
    description: '',
  },
  socialMediaSettings: {
    open: false,
    facebook_url: '',
    instagram_url: '',
    twitter_url: '',
    youtube_url: '',
    linkedIn_url: '',
    tikTok_url: '',
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
