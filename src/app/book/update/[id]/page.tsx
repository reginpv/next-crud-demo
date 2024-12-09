import FormUpdate from "@/components/FormUpdate";
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation";

export default async function Edit({ params }: { params: { id: number } }) {

  const book = await prisma.book.findUnique({
    where: {
      id: +params.id
    }
  })

  if(!book) {
    redirect('/')
  }

  return (
    <>
      <div className="__container container p-5">
        <div className="max-w-[680px] border p-5 sm:p-10 mx-auto">
          <FormUpdate book={book} />
        </div>
      </div>
    </>
  );
}
