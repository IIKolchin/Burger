import {
  format,
  formatDistanceToNowStrict,
  isToday,
  isYesterday,
} from "date-fns";
import { ru } from "date-fns/locale";
import { TGetBurgerCount, TIngredients } from "../services/types/data";

export const ingredientsCount = (arr: Array<TIngredients>) =>
  arr?.reduce(
    (prev: TGetBurgerCount, curr: TIngredients) => {
      const id = curr?._id;
      prev.count[id] = (prev.count[id] || 0) + 1;
      return prev;
    },
    { count: {} }
  );

export const getDateOrder = (date: string) => {
  const dateCreatedAt = new Date(date);
  const day = isToday(dateCreatedAt)
    ? "Сегодня"
    : isYesterday(dateCreatedAt)
    ? "Вчера"
    : formatDistanceToNowStrict(dateCreatedAt, {
        unit: "day",
        addSuffix: true,
        locale: ru,
      });
  const hour = format(dateCreatedAt, "p 'i-'O", { locale: ru });
  return `${day}, ${hour}`;
};
