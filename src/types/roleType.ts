
export enum RoleType {
  ADMIN = 'ADM',
  USER = 'USER',
}

export const getRoleText = (status: RoleType): string => {
  const texts: Record<RoleType, string> = {
    [RoleType.ADMIN]: 'Administrador',
    [RoleType.USER]: 'Usuário',
  }
  return texts[status]
}