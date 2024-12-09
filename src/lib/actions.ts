"use server"

import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"

// Find book
export async function searchBooksByTitle(searchTerm: string) {
  if (!searchTerm) {
    throw new Error("Search term is required")
  }

  const books = await prisma.book.findMany({
    where: {
      title: {
        contains: searchTerm, 
        mode: 'insensitive',
      },
    },
  })

  if (books.length === 0) {
    throw new Error("No books found with the given search term")
  }

  return books
}


// Create a book
export async function addBook(formData: FormData) {

  const title = formData.get('title') as string
  const author = formData.get('author') as string
  const publishedAt = formData.get('publishedAt') as string

  if (!title || !author || !publishedAt) {
    throw new Error("Missing required fields")
  }

  await prisma.book.create({
    data: {
      title,
      author,
      publishedAt: new Date(publishedAt),
    },
  })

  redirect('/')
}

// Update a book
export async function updateBook(bookId: number, formData: FormData) {

  if (!bookId) {
    throw new Error("Book ID is required")
  }

  const title = formData.get("title") as string | null
  const author = formData.get("author") as string | null
  const publishedAt = formData.get("publishedAt") as string | null

  if (!title && !author && !publishedAt) {
    throw new Error("At least one field (title, author, or publishedAt) must be provided to update the book")
  }

  const updatedData: { 
    title?: string 
    author?: string 
    publishedAt?: Date 
  } = {}

  if (title) updatedData.title = title
  if (author) updatedData.author = author
  if (publishedAt) updatedData.publishedAt = new Date(publishedAt)

  await prisma.book.update({
    where: {
      id: bookId,
    },
    data: updatedData,
  })

  redirect("/")
}

// Delete a book
export async function deleteBook(bookId: number) {

  if (!bookId) {
    throw new Error("Book ID is required")
  }

  await prisma.book.delete({
    where: { 
      id: 
      bookId 
    },
  })

  redirect("/")

}