export type TIngredients = {
  readonly calories?: number;
  readonly carbohydrates?: number;
  readonly fat?: number;
  readonly image?: string;
  readonly image_large?: string;
  readonly image_mobile?: string;
  readonly name?: string;
  readonly price?: number;
  readonly proteins?: number;
  readonly type?: string;
  readonly __v?: number;
  readonly _id?: string;
};

export type TConstructorItem = {
   readonly _id: string,
   readonly price: number,
   readonly name: string,
   readonly image: string,
   readonly type?: string,
   readonly uniqueId: string,
   readonly index: string|number,
};


export type TUser = {
    readonly password?: string;
    readonly email?: string;
    readonly name?: string;
  };


export type TOrder = {
   readonly createdAt: string;
   readonly ingredients: ReadonlyArray<string>;
   readonly name: string;
   readonly number: number;
   readonly owner: object;
   readonly price: number;
   readonly status: string;
   readonly updatedAt: string;
   readonly _id: string;
}

export type TOrders = {
	orders: Array<TOrder>;
    success: boolean;
	total: number;
	totalToday: number;
}