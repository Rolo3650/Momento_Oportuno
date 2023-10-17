export const config = {
  URL: {
    DEV: 'http://159.203.113.48',
    // TODO: Change to production url
    PROD: 'http://159.203.113.48',
  },
  API_PREFIX: {
    BASE: '/api',
    get FULL() {
      return `${this.BASE}` as const;
    },
  },
  NODE_ENV: import.meta.env.VITE_NODE_ENV,
  get IS_DEV() {
    return this.NODE_ENV === 'dev';
  },
  get BASE_URL() {
    return this.IS_DEV ? this.URL.DEV : this.URL.PROD;
  },
  get API_URL() {
    return `${this.BASE_URL}${this.API_PREFIX.FULL}` as const;
  },
  get API_CUSTOM() {
    return `${this.BASE_URL}${this.API_PREFIX.BASE}` as const;
  },
  WOOCOMMERCE: {
    PUBLIC_CLIENT: 'ck_2ce36694dbee497c906c77051616afdf4cd19cc3',
    SECRET_CLIENT: 'cs_4d0c83b48f3e6360ba95afc332fa1f3861bf07b4',
    get SAFE_b64_TOKEN() {
      const kUser = `${this.PUBLIC_CLIENT}:${this.SECRET_CLIENT}`;
      const base64 = Buffer.from(kUser).toString('base64');
      return base64;
    },
  },
} as const;
