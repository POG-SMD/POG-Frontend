import { OptionsList } from "@/components/ui/form/Select"

export enum MaterialType {
  IMPORTANT = '1',
  RELEVANT = '2',
  NOT_RELEVANT = '3',
}

export const getRoleText = (status: MaterialType): string => {
  const texts: Record<MaterialType, string> = {
    [MaterialType.IMPORTANT]: "Importante",
    [MaterialType.RELEVANT]: "Relevante",
    [MaterialType.NOT_RELEVANT]: "Não Relevante"
  }
  return texts[status]
}

export const getMaterialOptions = (): OptionsList[] => [
  {
    value: MaterialType.IMPORTANT,
    label: getRoleText(MaterialType.IMPORTANT),
  },
  {
    value: MaterialType.RELEVANT,
    label: getRoleText(MaterialType.RELEVANT),
  },
  {
    value: MaterialType.NOT_RELEVANT,
    label: getRoleText(MaterialType.NOT_RELEVANT),
  },
]