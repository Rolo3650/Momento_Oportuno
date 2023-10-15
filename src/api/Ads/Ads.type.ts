import * as z from 'zod';
export type Main_Anuncios = Anuncio[];

export type getAnuncioRes = Anuncio;

export interface Anuncio {
  id: number;
  title: string;
  url: string;
  image: string;
  images: Image[];
  description: string;
  price: string;
  user: User;
  created_at: string;
  is_featured: boolean;
  ciudad: CaracteresticasDeLaComunidad;
  salario: Salario;
  kilometraje: Aio;
  caracteristicas_de_la_propiedad: CaracteresticasDeLaComunidad;
  caracteresticas_de_la_comunidad: CaracteresticasDeLaComunidad;
  caracteresticas_de_la_mascota: CaracteresticasDeLaComunidad;
  caracteresticas_del_veheculo: CaracteresticasDeLaComunidad;
  aio: Aio;
  tour_virtual: TourVirtual;
  aio_de_construccinn: Aio;
  nivel_de_trabajo: CaracteresticasDeLaComunidad;
  horas: CaracteresticasDeLaComunidad;
  tipo_de_reclutador: CaracteresticasDeLaComunidad;
  tipo_de_contrato: CaracteresticasDeLaComunidad;
  marca: CaracteresticasDeLaComunidad;
  video: TourVirtual;
  medida_de_la_propiedad: Aio;
  baios: Aio;
  recamaras: Aio;
  galerea: Galerea;
  precio: Precio;
  categorea: CaracteresticasDeLaComunidad;
}

interface Aio {
  id: number;
  value: string;
}

interface CaracteresticasDeLaComunidad {
  id: number;
  value: ValueElement[];
}

interface ValueElement {
  id: number;
  key: string;
  name: string;
  parent: number;
  searchFormPlaceholder: string;
  parentTermIds: unknown[];
  dependencies: number[];
  hasMultilevelChildren: boolean;
}

interface Galerea {
  id: number;
  value: number[];
}

interface Image {
  id: number;
  width: number;
  height: number;
  url: string;
}

interface Precio {
  id: number;
  value: PrecioValue;
}

interface PrecioValue {
  listivo_130_listivo_459: string;
}

interface Salario {
  id: number;
  value: SalarioValue;
}

interface SalarioValue {
  listivo_4780_listivo_459: string;
}

interface TourVirtual {
  id: number;
  value: {
    url: string;
    embed: string;
  };
}

interface User {
  id: number;
  name: string;
  url: string;
  phone: string;
}

export interface Attributes {
  id: string | number;
  value:
    | string
    | NonNullable<FieldSchema['terms']>
    | NonNullable<FieldSchema['terms']>[number]
    | { listivo_130_listivo_459: string }
    | undefined;
}

export type createAnuncioParams = {
  model: {
    name: string;
    description: string;
    packageId: number;
    attributes: Attributes[];
  };
};

export type createAnuncioResponse = createAnuncioParams;

const TermSchema = z.object({
  id: z.number(),
  key: z.string(),
  name: z.string(),
  parent: z.number(),
  searchFormPlaceholder: z.string(),
  parentTermIds: z.array(z.any()),
  dependencies: z.array(z.number()),
  hasMultilevelChildren: z.boolean(),
});

export const FieldSchema = z.object({
  id: z.number(),
  key: z.string(),
  name: z.string(),
  type: z.enum(['taxonomy', 'embed', 'number', 'price', 'salary', 'gallery']),
  terms: z.union([z.array(TermSchema), z.null()]).optional(),
});

export type FieldSchema = z.infer<typeof FieldSchema>;

export const GetAllFieldsResponseSchema = z.array(FieldSchema);
export type GetAllFieldsResponse = z.infer<typeof GetAllFieldsResponseSchema>;
