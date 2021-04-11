import { Status } from "@/constants/index";

export const getStatusAlias = (status: string) => {
  switch (status) {
    case Status.available:
      return "利用中";
    case Status.stopped:
      return "停止中";
    default:
      return "エラー";
  }
};
