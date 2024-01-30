import List from "./List";

const headers = [
  {
    name: "Id",
    value: "id",
  },
  {
    name: "Nombre",
    value: "firstName",
  },
  {
    name: "Apellido",
    value: "lastName",
  },
  {
    name: "Correo Electrónico",
    value: "email",
  },
  {
    name: "Rol",
    value: "role",
  },
];

function UsersList() {
  return (
    <List
      endpoint="users"
      propertyName="data"
      name="Usuarios"
      headers={headers}
      listType="User"
    />
  );
}

export default UsersList;
