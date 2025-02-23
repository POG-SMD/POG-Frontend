export enum ReservationType {
  EQUIPMENT = 1,
  DATA_COLLECT = 2,
  REUNION = 3
}

export const getReservationType = (status: ReservationType): string => {
  const texts: Record<ReservationType, string> = {
    [ReservationType.EQUIPMENT]: "Equipamento",
    [ReservationType.DATA_COLLECT]: "Coleta de dados",
    [ReservationType.REUNION]: "Reunião",
  }
  return texts[status]
}