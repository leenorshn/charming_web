import Link from "next/link"

const people = [
    { name: 'Bombole ', chambre: 'numero-3', maladie: 'malaria , typhoide', etat: 'grave' },
    { name: 'Mista Poa', chambre: 'numero-1', maladie: 'typhoide', etat: 'gueri' },
    { name: 'Demba nyama mukali', chambre: 'numero-5', maladie: 'malaria ', etat: 'encour' },
    { name: 'JB mbiana', chambre: 'numero-8', maladie: ' typhoide', etat: 'grave' },
]

export default function Example() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Les malades</h1>

                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link
                        href={"/malades/new"}
                        type="button"
                        className="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Nouveau malade
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
                                        Chambre
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Maladie
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Etat
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person, i) => (
                                    <tr key={i}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.chambre}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.maladie}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.etat}</td>

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
