import FormAdd from "@/components/FormAdd"
import prisma from "@/lib/prisma"


export default async function Add() {

  const books = await prisma.book.findMany({
    orderBy: {
      id: 'desc',
    }
  })

  return (
    <>
      <div className="__container container p-5">
        <div className="max-w-[680px] border p-5 sm:p-10 mx-auto">
          <FormAdd />
        </div>
      </div>
    </>
  );
}
