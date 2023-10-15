export const Services = {
  INDEX: '/',
  ADS: '/listings',
  USERS: '/users',
  REGISTER: '/register',
  PRODUCT: '/product',
  PACKAGES: '/packages',
  Listivos_CATEGORIAS: '/listivo_14',
  Listivos_ESTADOS: '/listivo_10934',
  DIRECTORY: '/directories',
  MICROSITIOS: '/microsites',
  UPLOAD_IMAGE: '/media',
} as const;
export const CustomServices = {
  logIn: '/jwt-auth/v1/token',
  wc: '/wc/v3',
} as const;

export type SERVICES = (typeof Services)[keyof typeof Services];
export type CUSTOM_SERVICES =
  (typeof CustomServices)[keyof typeof CustomServices];
