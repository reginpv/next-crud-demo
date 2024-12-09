import { deleteBook } from "@/lib/actions"

export default async function FormDelete({id}:{id:number}) {

  async function handleDelete() {
    "use server"
    await deleteBook(id)

  }

  return (
    <form action={handleDelete}>
      <button>Delete</button>
    </form>
  )
}