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

export { addToStoreLs, getStoreDoc };
