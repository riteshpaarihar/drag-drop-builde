

const ElementProperties = ({ selectedElement, setSelectedElement }) => {
  const updateProperty = (e) => {
    setSelectedElement({
      ...selectedElement,
      content: e.target.value,
    });
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100 h-screen">
      <h3 className="text-xl font-bold mb-4">Edit Properties</h3>
      <label>Content</label>
      <input
        type="text"
        value={selectedElement.content}
        onChange={updateProperty}
        className="w-full p-2 mb-4 border"
      />
    </div>
  );
};

export default ElementProperties;
