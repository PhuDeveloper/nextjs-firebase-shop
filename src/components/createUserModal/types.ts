import { Dispatch, SetStateAction } from "react";

export interface CreateModalProps {
  setIsShowCreateUser: Dispatch<SetStateAction<boolean>>;
  isShowCreateUser: boolean;
}
