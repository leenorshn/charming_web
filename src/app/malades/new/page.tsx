/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {
    return (
        <form className='min-h-[86vh] pt-2 max-w-xl mx-auto'>
            <div className="space-y-1 ">
                <div className="border-b border-gray-900/10 pb-4">
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">Nouveau malade </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Veillez remplir tout les champs</p>

                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nom complet
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="fonction" className="block text-sm font-medium leading-6 text-gray-900">
                                Chambre
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="fontion"
                                    id="fonction"
                                    autoComplete="job"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Maladie
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    autoComplete="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Etat
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Grave</option>
                                    <option>Encour</option>
                                    <option>Complique</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-3 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Annuler
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Enregistrer
                </button>
            </div>
        </form>
    )
}
