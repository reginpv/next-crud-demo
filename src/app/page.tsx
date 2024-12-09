import prisma from "@/lib/prisma"
import Link from "next/link"
import { deleteBook } from "@/lib/actions"
import FormDelete from "@/components/FormDelete";

export default async function Home() {

  const books = await prisma.book.findMany({
    orderBy: {
      id: 'desc',
    }
  })

  return (
    <>
      <div className="__cotainer container p-5">
        
        <div className="flex flex-col sm:flex-row gap-5">
          <form className="flex-1 flex w-full">
            <div className="w-full flex">
              <input type="text" name="search" placeholder="Search" className="flex-1" />
              <button>Find</button>
            </div>
          </form>

          <div>
            <Link href="/add" className="button">Add book</Link>
          </div>
        </div>

      </div>

      <div className="__container container p-5">
        <div>

          {
            books.length > 0 ? 
              <div>
                {
                  books.map((book, i)=>(
                    <div key={i} className="flex gap-10 items-center justify-between">
                      <div>
                        <div>{book.title}</div>
                        <div>{book.author}</div>
                        <div>{book.publishedAt.toISOString()}</div>
                      </div>
                      <div>
                        <ul className="flex gap-5">
                          <li>
                            <Link href={`/book/update/${book.id}`}>Edit</Link>
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
