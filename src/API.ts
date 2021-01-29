/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelBookConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBookInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook:  {
    __typename: "Book",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
