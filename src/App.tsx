import { useState } from "react";

import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

import FolderList from "./components/FolderList";
import folders from "./utils/photos";
import Album from "./components/PhotoAlbum";
import { IFolder } from "./utils/@types";

export default function App() {
  const [folder, setFolder] = useState<IFolder | undefined>(undefined);
  const { modalProps, getTriggerProps, close } = useModal({
    background: "#F7F7F7",
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 5,
          paddingLeft: 5,
          marginBottom: 10,
        }}
      >
        <div
          {...getTriggerProps()}
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          مشاهده پوشه ها
        </div>
        <div>یک پوشه انتخاب کنید</div>
      </div>
      <Modal {...modalProps}>
        <FolderList
          folders={folders}
          onClick={(folder) => {
            setFolder(folder);
            close();
          }}
        />
      </Modal>
      {folder && <Album folder={folder} />}
    </>
  );
}
