export interface IPhoto {
  name: string;
  id: string;
  type: string;
  thumbnail: string;
  height: number;
  width: number;
}

export interface IFolder {
  name: string;
  id: string;
  type: string;
  items: IPhoto[];
}
