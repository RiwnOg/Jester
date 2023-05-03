import { User, Workload } from '@prisma/client';

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string | null;
  emailVerified: string | null;
};

export type SafeWorkload = Omit<Workload, 'dt_inicio' | 'dt_final'> & {
  dt_inicio: string;
  dt_final: string | null;
};
