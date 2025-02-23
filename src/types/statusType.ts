export enum statusType  {
  PENDENTE = 1,
  EM_RESERVA = 2,
  RECUSADO = 3,
  FINALIZADO = 4,
  CANCELADO = 5,
}

export const getStatusType = (status: statusType): string => {
  const texts: Record<statusType, string> = {
    [statusType.PENDENTE]: 'Pendente',
    [statusType.EM_RESERVA]: 'Em Reserva',
    [statusType.RECUSADO]: 'Recusado',
    [statusType.FINALIZADO]: 'Finalizado',
    [statusType.CANCELADO]: 'Cancelado',
  }
  return texts[status]
}

export const getStatusColor = (status: statusType): string => {
  const colors: Record<statusType, string> = {
    [statusType.PENDENTE]: "text-yellow-600 bg-yellow-100" ,
    [statusType.EM_RESERVA]: "text-blue-600 bg-blue-100" ,
    [statusType.RECUSADO]: "text-red-600 bg-red-100" ,
    [statusType.FINALIZADO]: "text-green-600 bg-green-100" ,
    [statusType.CANCELADO]: "text-gray-600 bg-gray-100" ,
  };

  return colors[status] || "text-gray-500 bg-gray-200" ;
};