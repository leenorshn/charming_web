import Image from 'next/image'

const stats = [
  { name: 'Personel', stat: '7' },
  { name: 'Malade', stat: '45' },
  { name: 'Mort', stat: '0' },
]

export default function Home() {
  return (
    <main className="flex min-h-[86vh] flex-col items-center justify-between py-8">

      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">Dernier 30 jours</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden w-72 rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </main>
  )
}





