import prisma from "@/lib/prisma"
import Link from "next/link";

export default async function Home() {

  const books = await prisma.book.findMany({
    orderBy: {
      id: 'desc',
    }
  })

  return (
    <>
      <div className="__container container p-5">
        <div>

          {
            books.length > 0 ? 
              <div>

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
