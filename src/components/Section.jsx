import { useState } from 'react';

function Section({ id, title, type, content, items, setData, isAdmin }) {
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
    <section id={id} className="mb-16">
      <h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white border-b-2 border-indigo-600 pb-2">
        {title}
      </h2>
      <div className="p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800">
        {type === 'text' ? (
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg">
            {content || 'No information provided yet.'}
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items && items.length > 0 ? (
              items.map(item => (
                <li
                  key={item.id}
                  className="p-6 bg-gray-50 rounded-lg dark:bg-gray-700 shadow-md hover:shadow-lg transition"
                >
                  {isEditing ? (
                    <input
                      defaultValue={item.title}
                      onBlur={e => handleUpdateItem(item.id, e.target.value)}
                      className="w-full p-2 border rounded dark:bg-gray-600 dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{item.title}</span>
                  )}
                  {isEditing && isAdmin && (
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="mt-3 px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700"
                    >
                      Delete
                    </button>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400 col-span-full">No items added yet.</p>
            )}
          </ul>
        )}
        {isAdmin && isEditing ? (
          <div className="mt-8 space-y-6">
            {type === 'text' ? (
              <textarea
                value={editText}
                onChange={e => setEditText(e.target.value)}
                className="w-full p-4 border rounded-lg dark:bg-gray-600 dark:text-white"
                rows="6"
                placeholder="Enter your text here..."
              />
            ) : (
              <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                className="w-full p-4 border rounded-lg dark:bg-gray-600 dark:text-white"
                placeholder={`Add a new ${title.toLowerCase()}...`}
              />
            )}
            <div className="flex space-x-4">
              <button
                onClick={type === 'text' ? handleUpdateText : handleAdd}
                className="px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          isAdmin && (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 px-6 py-2 text-white bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Edit {title}
            </button>
          )
        )}
      </div>
    </section>
  );
}

export default Section;
