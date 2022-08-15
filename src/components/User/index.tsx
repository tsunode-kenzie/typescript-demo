// interface IUser que são as propriedas do usuario
export interface IUser {
  name: string;
  age: number;
  techs?: string[];
}

// interface IUserProps que são as props que o componente User irá receber
interface IUserProps {
  user: IUser,
}

const User = ({ user }: IUserProps) => {
  return(
    <h1>{user.name}</h1>
  )
}

export default User;