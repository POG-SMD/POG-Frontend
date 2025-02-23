export enum ReservationType {
  EQUIPMENT = 1,
}

export const getReservationType = (status: ReservationType): string => {
  const texts: Record<ReservationType, string> = {
    [ReservationType.EQUIPMENT]: "Equipamento",
  }
  return texts[status]
}