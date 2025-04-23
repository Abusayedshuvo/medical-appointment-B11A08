const getStoreDoc = () => {
  const storedDoc = localStorage.getItem("docList");
  if (storedDoc) {
    const storeDocData = JSON.parse(storedDoc);
    return storeDocData;
  } else {
    return [];
  }
};

const addToStoreLs = (id) => {
  const storeDocData = getStoreDoc();
  if (storeDocData.includes(id)) {
    alert("Already added");
  } else {
    storeDocData.push(id);
    const data = JSON.stringify(storeDocData);
    localStorage.setItem("docList", data);
  }
};

const removeFromStoreLs = (id) => {
  const storeDocData = getStoreDoc();
  const idString = id.toString();
  const index = storeDocData.indexOf(idString);

  if (index !== -1) {
    storeDocData.splice(index, 1);
    const data = JSON.stringify(storeDocData);
    localStorage.setItem("docList", data);
    return true;
  }

  return false;
};

export { addToStoreLs, getStoreDoc, removeFromStoreLs };
