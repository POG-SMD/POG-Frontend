import { OptionsList } from "@/components/ui/form/Select"

export enum MaterialType {
  IMPORTANT = '1',
  RELEVANT = '2',
  NOT_RELEVANT = '3',
}

export const getMaterialType = (status: MaterialType): string => {
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
    label: getMaterialType(MaterialType.IMPORTANT),
  },
  {
    value: MaterialType.RELEVANT,
    label: getMaterialType(MaterialType.RELEVANT),
  },
  {
    value: MaterialType.NOT_RELEVANT,
    label: getMaterialType(MaterialType.NOT_RELEVANT),
  },
]