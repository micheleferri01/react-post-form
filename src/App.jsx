import { useState } from "react"
import axios from "axios";

const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};


export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [alert, setAlert] = useState();

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log(formData);

    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData)
      .then((res) => {
        console.table(res.data);
        setAlert({ type: 'success', message: 'Post successfully created.' });
        setFormData({ ...formData, author: "", title: "", body: "", public: false});
  })
      .catch ((err) => {
    setAlert({ type: 'danger', message: 'An error occurred during the creation of the post, please try again.' })
  })

  // console.table(formData);
}

return (
  <>
    <div className="container my-4">
      <form onSubmit={handleFormSubmit} className="card bg-light my-4 py-4">
        <h1 className="text-center">Create new post</h1>

        <div className="card-body d-flex flex-column">
          <div className="mb-4">
            <label htmlFor="author" className="form-label">Author</label>
            <input value={formData.author} onChange={handleFormChange} type="text" name="author" id="author" className="form-control" required />
          </div>

          <div className="mb-4">
            <label htmlFor="post-title" className="form-label">Post title</label>
            <input value={formData.title} onChange={handleFormChange} type="text" name="title" id='post-title' className="form-control" required />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea value={formData.body} onChange={handleFormChange} name='body' id="description" className="form-control"></textarea>
          </div>

          <div className="mb-4 form-check">
            <input checked={formData.public} onChange={handleFormChange} type="checkbox" name="public" id="public" className="form-check-input" />
            <label htmlFor="public" className="form-check-label">Public</label>
          </div>

          <div className="align-self-end">
            <button className='btn btn-primary'>Post</button>
          </div>
        </div>
      </form>

      {alert && <div className={"alert alert-" + alert.type}>{alert.message}</div>}

    </div>

  </>
)
}

