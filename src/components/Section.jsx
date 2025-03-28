import { useState } from 'react';

function Section({ title, type, content, items, setData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState('');
  const [editText, setEditText] = useState(content || '');

  const handleAdd = () => {
    if (newItem && type === 'list') {
      setData(prev => ({
        ...prev,
        [title.toLowerCase()]: [...prev[title.toLowerCase()], { id: Date.now(), title: newItem }],
      }));
      setNewItem('');
    }
    setIsEditing(false);
  };

  const handleUpdateText = () => {
    if (type === 'text') {
      setData(prev => ({ ...prev, [title.toLowerCase()]: editText }));
    }
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    setData(prev => ({
      ...prev,
      [title.toLowerCase()]: prev[title.toLowerCase()].filter(item => item.id !== id),
    }));
  };

  const handleUpdateItem = (id, newTitle) => {
    setData(prev => ({
      ...prev,
      [title.toLowerCase()]: prev[title.toLowerCase()].map(item =>
        item.id === id ? { ...item, title: newTitle } : item
      ),
    }));
  };

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">{title}</h2>
      {type === 'text' ? (
        <p className="text-gray-700 dark:text-gray-300">{content || 'Click "Edit" to add info.'}</p>
      ) : (
        <ul className="space-y-4">
          {items && items.length > 0 ? (
            items.map(item => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow dark:bg-gray-800"
              >
                {isEditing ? (
                  <input
                    defaultValue={item.title}
                    onBlur={e => handleUpdateItem(item.id, e.target.value)}
                    className="w-full p-2 text-gray-700 border rounded dark:bg-gray-700 dark:text-gray-200"
                  />
                ) : (
                  <span className="text-gray-700 dark:text-gray-200">{item.title}</span>
                )}
                {isEditing && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 ml-2 text-white transition bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No items yet. Add some!</p>
          )}
        </ul>
      )}
      {isEditing ? (
        <div className="mt-6">
          {type === 'text' ? (
            <textarea
              value={editText}
              onChange={e => setEditText(e.target.value)}
              className="w-full p-3 text-gray-700 border rounded dark:bg-gray-700 dark:text-gray-200"
              rows="4"
            />
          ) : (
            <input
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              className="w-full p-3 text-gray-700 border rounded dark:bg-gray-700 dark:text-gray-200"
              placeholder={`Add a new ${title.toLowerCase()}...`}
            />
          )}
          <button
            onClick={type === 'text' ? handleUpdateText : handleAdd}
            className="px-4 py-2 mt-2 text-white transition bg-green-500 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 mt-2 ml-2 text-gray-700 transition bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 mt-4 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Edit {title}
        </button>
      )}
    </section>
  );
}

export default Section;
