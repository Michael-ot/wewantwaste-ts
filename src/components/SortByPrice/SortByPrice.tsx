import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

type SortOption = {
  name: string
  value: 'low-to-high' | 'high-to-low'
}

type SortByPriceProps = {
    setSortBy: React.Dispatch<React.SetStateAction<"low-to-high" | "high-to-low">>
}

const sortOptions: SortOption[] = [
  { name: 'Price: Low to High', value: 'low-to-high' },
  { name: 'Price: High to Low', value: 'high-to-low' },
]

export const SortByPrice: React.FC<SortByPriceProps> =  ({setSortBy}) => {
  const [selected, setSelected] = useState<SortOption>(sortOptions[0])

  useEffect(() => {
    setSortBy(selected.value)
  },[selected])

  return (
    <div className="bg-primary/15 px-10 py-5 rounded-4xl mb-10 md:mb-20 sm:flex sm:items-center justify-end space-y-3.5 sm:space-y-0 sm:space-x-3.5">
      <p className="text-white font-medium text-sm">Sort by</p>
      <div className="sm:w-52">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <ListboxButton className="relative w-full cursor-default rounded-4xl bg-primary py-2 pl-4 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-black border border-white/20 py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50">
              {sortOptions.map((option) => (
                <ListboxOption
                  key={option.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary/40 text-white' : 'text-white'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.name}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  )
}
