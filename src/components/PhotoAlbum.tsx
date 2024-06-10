import { useState } from "react";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Download from "yet-another-react-lightbox/plugins/download";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { IFolder } from "../utils/@types";
import { getFolderPhotos, getFolderThumbnails } from "../utils/photos";

interface IProps {
  folder: IFolder;
}

const Album = (props: IProps) => {
  const { folder } = props;

  const [index, setIndex] = useState(-1);

  const photos = getFolderPhotos(folder);
  const thumbnails = getFolderThumbnails(folder);
  return (
    <>
      <PhotoAlbum
        photos={thumbnails}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Thumbnails, Zoom, Download]}
      />
    </>
  );
};

export default Album;
