import prisma from "@/lib/prisma"
import Link from "next/link"
import FormDelete from "@/components/FormDelete"
import FormFind from "@/components/FormFind"

export default async function Home() {

  const books = await prisma.book.findMany({
    orderBy: {
      id: 'desc',
    }
  })

  return (
    <>
      <div className="__cotainer container p-5">
        
        <div className="flex flex-col sm:flex-row gap-5 justify-end">

          <div>
            <Link href="/book/add" className="button">Add book</Link>
          </div>
        </div>

      </div>

      <div className="__container container p-5">
        <div>

          {
            books.length > 0 ? 
              <div className="flex flex-col gap-5">
                {
                  books.map((book, i)=>(
                    <div key={i} className="flex gap-10 items-center justify-between border p-5">
                      <div>
                        <div className="text-xl font-semibold">{book.title}</div>
                        <div className="opacity-75">By: {book.author}</div>
                        <div className="opacity-75">{new Date(book.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                      </div>
                      <div>
                        <ul className="flex flex-col sm:flex-row gap-5">
                          <li>
                            <Link href={`/book/update/${book.id}`} className="button">Edit</Link>
                          </li>
                          <li>
                            <FormDelete id={book.id} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                }
              </div> : 
              <div className="text-center">
                No book found. <Link href="/add">Click here to add one.</Link>
              </div>
          }

        </div>
      </div>
    </>
  );
}
