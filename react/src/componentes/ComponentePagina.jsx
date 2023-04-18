import React from 'react'

export default function ComponentePagina({titulo, botones ='', hijos}) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{ titulo }</h1>
          {botones}
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {hijos}
        </div>
      </main>
    </>
  )
}
