import bcrypt from "bcrypt";
import Config from "../../Config";
import prisma from "../../shared/prism";
import { jswHelpers } from "../../helpars/jwtHelpers";

const createUser = async (payload: any) => {
  const hashedPassword: string = await bcrypt.hash(payload.password, 12);
  payload.password = hashedPassword;

  const result = await prisma.user.create({ data: payload });
  const { id, name, email, createdAt, updatedAt } = result;
  return { id, name, email, createdAt, updatedAt };
};

const loginUserDB = async (payload: any) => {
  const userData = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!userData) {
    throw new Error(" Unauthorized Access!");
  }

  const isCorrectPassword: boolean = await bcrypt.compare(
    payload.password,
    userData.password
  );
  if (!isCorrectPassword) {
    throw new Error("Password incorrect!");
  }
  const accessToken = jswHelpers.genarateToken(
    {
      email: userData.email,
      id: userData.id
    },
    Config.jwt.jwt_secret as string,
    Config.jwt.expires_in as string
  );
  const { id, name, email } = userData;
  return {
    id,
    name,
    email,
    token: accessToken,
  };
};

export const AuthServices = {
  createUser,
  loginUserDB,
};
