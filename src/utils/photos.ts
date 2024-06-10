import { IFolder, IPhoto } from "./@types";
import data from "./data.json";

const IMAGE_HOST_BASE_URL = "https://qajari.pics/";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
const photoAlbums: IFolder[] = data;

const thumbnailLink = (data: IPhoto, width: number) =>
  `${data.thumbnail}${width}`;

export const getFolderPhotos = (folder: IFolder) => {
  return folder.items.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: encodeURI(IMAGE_HOST_BASE_URL + `${folder.name}/${photo.name}`),
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: thumbnailLink(photo, breakpoint),
          width: breakpoint,
          height,
        };
      }),
    };
  });
};

const folders = photoAlbums
  .filter((f) => f.type === "folder")
  .sort((a, b) => parseInt(a.name) - parseInt(b.name));
export default folders;
