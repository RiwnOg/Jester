import prisma from '@/libs/prisma';
import getUser from '@/actions/getUser';
import { formatDate } from '@/libs/utils';

export default async function getWorkload() {
  try {
    const currentUser = await getUser();
    if (!currentUser) {
      return [];
    }
    const workloads = await prisma.workload.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    const safeWorkload = workloads.map((workload) => ({
      ...workload,
      dt_inicio: formatDate(workload.dt_inicio),
      dt_final: formatDate(workload.dt_final || ''),
    }));

    return safeWorkload;
  } catch (error: any) {
    throw new Error(error);
  }
}
