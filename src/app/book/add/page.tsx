import FormAdd from "@/components/FormAdd"

export default async function Add() {

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
