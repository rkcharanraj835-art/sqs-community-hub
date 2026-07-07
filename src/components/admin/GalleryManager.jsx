import CrudManager from "./crud/CrudManager";

function GalleryManager() {
  return (
    <CrudManager
      title="Gallery Manager"
      collectionName="gallery"
      fields={[
        {
          name: "image",
          label: "Image URL",
          type: "image",
        },
        {
          name: "title",
          label: "Title",
        },
      ]}
    />
  );
}

export default GalleryManager;