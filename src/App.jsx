import { useState } from "react"

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({...formData, [name]: type === 'checkbox'? checked : value});
    console.log(formData);
  }
  return (
    <>
      <form>
        <h1>Create a new post</h1>
        <div className="mb-4">
          <label htmlFor="author" className="form-label">Author</label>
          <input value={formData.author} onChange={handleFormChange} type="text" name="author" id="author" className="form-control" />
        </div>

        <div className="mb-4">
          <label htmlFor="post-title" className="form-label">Post title</label>
          <input value={formData.title} onChange={handleFormChange} type="text" name="title" id='post-title' className="form-control" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea value={formData.body} onChange={handleFormChange} name='body' id="description" className="form-control"></textarea>
        </div>

        <div className="mb-4 form-check">
          <input onChange={handleFormChange} type="checkbox" name="public" id="public" className="form-check-input" />
          <label htmlFor="public" className="form-check-label">Public</label>
        </div>

        <button className='btn btn-primary'>Post</button>

      </form>
    </>
  )
}

