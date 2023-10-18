import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BiCaretDown } from 'react-icons/bi'

const people = [
	{ name: 'Wade Cooper' },
	{ name: 'Arlene Mccoy' },
	{ name: 'Devon Webb' },
	{ name: 'Tom Cook' },
	{ name: 'Tanya Fox' },
	{ name: 'Hellen Schmidt' },
]

interface ListBoxOptionsProps {
	text?: string
}

export default function ListBoxOptions({ text }: ListBoxOptionsProps) {
	const [selected, setSelected] = useState(people[0])

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className='relative mt-1 min-w-[170px]'>
				<Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
					<span className='flex gap-3 truncate text-gray-400'>
						{text && <p className='text-black'>{text}:</p>}
						{selected.name}
					</span>
					<span className='pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2'>
						<BiCaretDown className='text-gray-400' aria-hidden='true' />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<Listbox.Options className='absolute mt-1 max-h-60 w-full z-40 overflow-auto rounded-md bg-white py-3 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
						{people.map((person, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4${
										active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
									}`
								}
								value={person}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? 'font-medium' : 'font-normal'
											}`}
										>
											{person.name}
										</span>
										{selected ? (
											<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
												{/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	)
}
