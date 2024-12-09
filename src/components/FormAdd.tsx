import { addBook } from "@/lib/actions"

export default function FormAdd() {

  return (
    <form action={addBook} className="flex flex-col gap-3">
      <div>
        <h2>Add book</h2>
      </div>
      <div>
        <input type="text" name="title" placeholder="Title" />
      </div>
      <div>
        <input type="text" name="author" placeholder="Author" />
      </div>
      <div>
        <input type="date" name="publishedAt" placeholder="Date published" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}