import { compare, hash } from "bcrypt";

const useBcrypt = () => {
  const hashPassword = (password) => {
    return hash(password, 10).then((hash) => {
      return hash;
    });
  };

  const comparePassword = (password, hashedPassword) => {
    return compare(password, hashedPassword).then((result) => {
      return result;
    });
  };
};

export default useBcrypt;
