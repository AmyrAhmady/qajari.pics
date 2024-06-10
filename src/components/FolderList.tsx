import { useEffect, useState } from "react";
import { IFolder } from "../utils/@types";

interface IProps {
  folders: IFolder[];
  onClick: (folder: IFolder) => void;
}

const FolderIcon = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
    >
      <path
        fill="#FFA000"
        d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"
      />
      <path
        fill="#FFCA28"
        d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"
      />
    </svg>
  );
};

const FolderItem = ({
  folder,
  index,
  onClick,
}: {
  folder?: IFolder;
  index: number;
  onClick?: (folder: IFolder) => void;
}) => {
  return (
    <a
      href={folder && "#"}
      onClick={() => {
        if (onClick && folder) onClick(folder);
      }}
      id={"folder-" + index}
      style={{
        width: 110,
        height: 120,
        marginBottom: "1.0rem",
        textDecoration: "none",
        color: "#461573",
      }}
    >
      {folder && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FolderIcon />
          <div
            style={{
              position: "absolute",
              width: 110,
              height: 120,
              marginTop: -10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bolder",
              fontSize: "1.8rem",
            }}
          >
            #{folder.name}
          </div>
          <div
            style={{
              marginTop: -10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "black",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            <div>🖼️</div>
            {folder.items.length}
          </div>
        </div>
      )}
    </a>
  );
};

const FolderList = (props: IProps) => {
  const { folders, onClick } = props;
  const [hiddenFolderCount, setHiddenFolderCount] = useState(0);

  useEffect(() => {
    function handleResize() {
      recalculatedRowItems();
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => recalculatedRowItems(), [folders]);

  const recalculatedRowItems = () => {
    const container = document.getElementById("folder-container");
    const folderItem = document.getElementById("folder-0");
    if (container && folderItem) {
      const folderEachRow = Math.floor(
        container.offsetWidth / folderItem.offsetWidth
      );

      setHiddenFolderCount(folderEachRow - (folders.length % folderEachRow));
    }
  };

  return (
    <div
      id="folder-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingBottom: 100,
      }}
    >
      {folders.map((folder, index) => (
        <FolderItem
          folder={folder}
          index={index}
          onClick={(folder_) => {
            onClick(folder_);
          }}
        />
      ))}
      {Array(hiddenFolderCount)
        .fill({})
        .map((_, index) => (
          <FolderItem index={folders.length - index} />
        ))}
    </div>
  );
};

export default FolderList;
