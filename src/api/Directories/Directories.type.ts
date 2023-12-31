import * as z from 'zod';
import { State } from '..';
export type Directorio = Omit<CreateDirectorio, 'package' | 'state'> & {
  id: number;
  user_id: number;
  status: string;
  thumbnail: string;
  state: State;
  media: any;
  expire: string;
};

export type DirectorioMapped = Omit<
  Directorio,
  '_links' | 'acf' | 'date_gmt' | 'modified_gmt' | 'slug' | 'template'
>;

export type GetAllDirectoriosRes = {data: Directorio[]};

export const DirectorioSchema = z.object({
  title: z.string().nonempty(),
  type: z.string().nonempty(),
  location: z.string().optional(),
  hours: z.string().nonempty(),
  address: z.string().nonempty(),
  phone: z.string().nonempty(),
  email: z.string().nonempty(),
  thumbnail: z.string().nonempty(),
  user_id: z.number().nonnegative(),
});

export type DirectorioType = z.infer<typeof DirectorioSchema>;

export type CreateDirectorio = DirectorioType & {
  package?: number;
  state_id: number;
};

export type CreateDirectorioResponse = {
  data: {
    id: number;
    title: string;
    state: State;
    type: string;
    hours: string;
    address: string;
    phone: string;
    email: string;
    user_id: number;
    expire: string;
    status: string;

  }

};
