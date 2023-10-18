'use client'

import {Button} from '@nextui-org/button'
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

const UserInfo = () => {
  return (
    <div className='flex items-center gap-2 text-black'>
      <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d'/>
      <h1 className='hidden md:block whitespace-nowrap'>Carl Escape</h1>
      <Dropdown className='text-black'>
        <DropdownTrigger>
          <Button variant='light' className='p-0 min-w-[40px] bg-transparent '>
            <MdOutlineKeyboardArrowDown className={'text-2xl'}/>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Static Actions'>
          <DropdownItem key='new'>New file</DropdownItem>
          <DropdownItem key='copy'>Copy link</DropdownItem>
          <DropdownItem key='edit'>Edit file</DropdownItem>
          <DropdownItem key='delete' className='text-danger' color='danger'>
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default UserInfo
