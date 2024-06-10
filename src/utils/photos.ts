import { IFolder, IPhoto } from "./@types";
import data from "./data.json";

const IMAGE_HOST_BASE_URL = "http://assets.qajari.pics/";
const photoAlbums: IFolder[] = data;

export const getFolderPhotos = (folder: IFolder) => {
  return folder.items.map((photo) => {
    return {
      src: encodeURI(IMAGE_HOST_BASE_URL + `${folder.name}/${photo.name}`),
      width: photo.width,
      height: photo.height,
    };
  });
};

export const getFolderThumbnails = (folder: IFolder) => {
  return folder.items.map((photo) => {
    const width = 360;
    const height = Math.round((photo.height / photo.width) * width);
    return {
      src: encodeURI(
        IMAGE_HOST_BASE_URL + `thumbnails/${folder.name}/${photo.name}`
      ),
      width,
      height,
    };
  });
};

const folders = photoAlbums
  .filter((f) => f.type === "folder")
  .sort((a, b) => parseInt(a.name) - parseInt(b.name));
export default folders;
