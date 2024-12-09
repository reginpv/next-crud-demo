import { updateBook } from "@/lib/actions"

export default async function FormUpdate({ book }: { book: Book }) {

  async function handleUpdate(formData: FormData) {
    "use server"
    await updateBook(book.id, formData)

  }

  return (
    <form action={handleUpdate} className="flex flex-col gap-3">
      <div>
        <h2>Update book: <strong>{book.title}</strong></h2>
      </div>
      <div>
        <input type="text" name="title" placeholder="Title" defaultValue={book.title} />
      </div>
      <div>
        <input type="text" name="author" placeholder="Author" defaultValue={book.author} />
      </div>
      <div>
        <input type="date" name="publishedAt" placeholder="Date published" defaultValue={book.publishedAt.toISOString().split('T')[0]} max={new Date().toISOString().split('T')[0]}  />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}