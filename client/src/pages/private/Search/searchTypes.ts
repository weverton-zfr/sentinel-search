import {
  LuUser,
  LuMail,
  LuPhone,
  LuBuilding2,
  LuMapPin,
  LuDatabase
} from "react-icons/lu"

export const searchTypes = [
  {
    id: "name",
    label: "Nome",
    description: "Busque por nome completo",
    Icon: LuUser
  },
  {
    id: "email",
    label: "E-mail",
    description: "Localize dados por e-mail",
    Icon: LuMail
  },
  {
    id: "phone",
    label: "Telefone",
    description: "Consulte por número",
    Icon: LuPhone
  },
  {
    id: "company",
    label: "Empresa",
    description: "Busque por CNPJ ou razão social",
    Icon: LuBuilding2
  },
  {
    id: "address",
    label: "Endereço",
    description: "Consulte por cidade ou CEP",
    Icon: LuMapPin
  },
  {
    id: "database",
    label: "Avançada",
    description: "Busca em múltiplas bases",
    Icon: LuDatabase
  }
]