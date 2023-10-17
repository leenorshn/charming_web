import Link from "next/link"

const people = [
    { name: 'Lindsay Walton', title: 'Medecin traitant', phone: '+243978154328', role: 'Agent' },
    { name: 'Martin Munyonyo', title: 'Medecin traitant', phone: '+243978154328', role: 'Agent' },
    { name: 'Kahindo ilunga Vicky', title: 'Medecin Principale', phone: '+243978154328', role: 'Agent' },
    { name: 'Tito Lula', title: 'Medecin traitant', phone: '+243978154328', role: 'Agent' },
    { name: 'Lindsay Walton', title: 'Medecin traitant', phone: '+243978154328', role: 'Agent' },
    { name: 'Martin Munyonyo', title: 'Medecin traitant', phone: '+243978154328', role: 'Agent' },
    { name: 'Kahindo ilunga Vicky', title: 'Medecin Principale', phone: '+243978154328', role: 'Agent' },
    { name: 'Tito Lula', title: 'Medecin traitant', phone: '+243978154328', role: 'Agent' },
]

export default function Example() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900"> Personnel de santes</h1>

                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link href={"/personel_soignant/new"}
                        type="button"
                        className="block rounded-md mt-4 bg-indigo-600 px-8 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Nouveau agent
                    </Link>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                    >
                                        Nom complet
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        fonction
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Numero tel
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.phone}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.phone}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
