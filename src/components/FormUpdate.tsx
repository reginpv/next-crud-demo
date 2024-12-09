import { updateBook } from "@/lib/actions"

export default async function FormUpdate({ id }: { id: number }) {

  async function handleUpdate(formData: FormData) {
    "use server"
    await updateBook(id, formData)

  }

  return (
    <form action={handleUpdate} className="flex flex-col gap-3">
      <div>
        <h2>Update book</h2>
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