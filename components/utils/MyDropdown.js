import React from 'react'
import { Menu } from '@headlessui/react'
import {  Bars3Icon} from '@heroicons/react/24/outline'


function MyDropdown() {
    return (
      <Menu>
        <Menu.Button><Bars3Icon className="h-12 w-12 text-blue-700"/></Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
        </Menu.Item>
        <Menu.Item>
        {({ active }) => (
            <a
            className={`${active && 'bg-blue-500'}`}
            href="/account-settings"
            >
            Documentation
            </a>
        )}
        </Menu.Item>
        <Menu.Item disabled>
        <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
    </Menu.Items>
    </Menu>
)
}

export default MyDropdown